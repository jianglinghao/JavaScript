    Vue.component("searchbar", {
            template: `
			<div class="seachWord">
                <div calss="navbar">
                    <input class="seachBar" autofocus  v-model="word" type="text" 
                        @input="autoComplete" 
                        @keydown.up.prevent="barUp" 
                        @keydown.down.prevent="barDown"
                        @keyup.enter="getWord"
                        @keyup="alert"
                    />
                    <button class="btn" @click="getWord">搜索</button>
                    <button class="btn" @click="addToNote">记录</button>
          
                    <div class="autocomplete">
                        <ul calss="autolists" v-if="autobars.length" >
                            <li class="autolist"
                            :class="{
                                selected: index == nowIndex
                                }" 
                            v-for="(item, index) in autobars"
                            @click="getWord($event,index)"
                            >{{item}}
                            </li>
                        </ul>
                    </div>
				</div>
				<div class="wordMeaning" v-for="item in wordMeaning">
				    <h1 class="word-nav">{{item.headword}}</h1>
				    <div class="pronunce" v-for="pronIt in item.prons">
				            <span class="region">{{pronIt.region}}</span>
				            <span @click="playAudio(pronIt.mp3)" >
				                播放
                                <audio id="audio" style="display:none" autoplay src=""></audio>
				           </span>
                            <span>{{pronIt.text}}</span>
				    </div>
				    <div  v-for="sense in item.senses">
				        <div >
				            <span class="sense hw">{{sense.hw}}</span>
				            <span v-if="sense.pos.length" class="sense pos">{{sense.pos}}</span>
				            <span class="sense guideword">{{sense.guideword}}</span>
				            <div v-for="def in sense.defs">
				                <div>
				                    <div>
                                        {{def.defEn}}
                                         <audio class="audioEn" style="display:none" autoplay src=""></audio>
                                        <span @click="playAudioSentenceEn(def.defEn)" class="play">播放</span>
                                    </div>    
                                        <div>
                                        {{def.defCn}}
                                         <audio class="audioCn" style="display:none" autoplay src=""></audio>
                                         <span @click="playAudioSentenceCn(def.defCn)" class="play">播放</span>
                                    </div>    
				                    <div v-for="example in def.examples">
				                        <div>
				                            <div>{{example.en}}
                                                <audio class="audioEn" style="display:none" autoplay src=""></audio>
                                                <span @click="playAudioSentenceEn(example.en)" class="play">播放</span>
                                            </div>
				                            <div>{{example.cn}}
                                                <audio class="audioCn" style="display:none" autoplay src=""></audio>
                                                <span @click="playAudioSentenceCn(example.cn)" class="play">播放</span>
                                            </div>
				                        </div>
				                    </div>
				                </div>
				            </div>
				        </div>
				    </div>
			</div>


		`,
            props: ["value"],
            data() {
                return {
                    word: this.value,
                    autoplay: false,
                    nowIndex: -1,
                    autobars: [],
                    wordMeaning: [],
                }
            },
            watch: {
                value(newVal) {
                    this.word = newVal
                }

            },
            created() {
                var self = this
                if (location.hash) {
                    self.word = location.hash.substr(1)
                    const url =
                        'http://damiao.io:5000/word/' + self.word
                    fetch(url)
                        .then(blob => blob.json())
                        .then(data => {
                            self.wordMeaning = []
                            self.wordMeaning.push(...data)
                        })
                }
                window.onhashchange = function() {
                    console.log("onhashchange")
                    self.word = location.hash.substr(1)

                    const url =
                        'http://damiao.io:5000/word/' + self.word
                    fetch(url)
                        .then(blob => blob.json())
                        .then(data => {
                            self.wordMeaning = []
                            self.wordMeaning.push(...data)
                        })
                }
            },
            methods: {
                alert: function() {
                    var self = this
                    document.addEventListener('keyup', function(event) {
                        //回车 加 enter 提交
                        if (event.keyCode == 13 && event.ctrlKey) {
                            var bortherword = self.word
                            bus.$emit('addWord', bortherword)
                        }
                    })

                },
                playAudioSentenceEn: function(url) {
                    var audio = document.createElement('audio')
                    var src = 'http://fanyi.baidu.com/gettts?lan=en&text=' + encodeURI(url) + '&spd=3&source=web'
                    console.log(src)
                    audio.setAttribute("src", src)
                    audio.autoplay = "autoplay"
                },
                playAudioSentenceCn: function(url) {
                    var audio = document.createElement('audio')
                    var src = 'http://fanyi.baidu.com/gettts?lan=zh&text=' + encodeURI(url) + '&spd=5&source=web'
                    console.log(src)
                        // var audios = document.querySelectorAll(".audioCn")
                    audio.setAttribute("src", src)
                    audio.autoplay = "autoplay"
                },
                // todo
                playAudio: function(url) {
                    // console.log(url)
                    //这个真不会数据驱动 只能操作DOM了
                    var audio = document.querySelector("#audio")
                    audio.src = url
                        // audio.src= 
                        // <audio src="pronIt.mp3" autopaly></audio>
                        // "https://fanyi.baidu.com/gettts?lan=zh&text=" + encodeURI(str) +   "&spd=5&source=web"

                },
                addToNote: function() {
                    var bortherword = this.word
                    bus.$emit('addWord', bortherword)
                },
                //按键时 自动补全  展示10个li
                barUp: function(event) {
                    if (this.word) {
                        this.nowIndex <= 0 ? this.nowIndex = this.autobars.length - 1 : this.nowIndex--
                            this.word = this.autobars[this.nowIndex]
                    }
                },
                barDown: function(event) {
                    if (this.word) {
                        this.nowIndex >= this.autobars.length - 1 ? this.nowIndex = 0 : this.nowIndex++
                            this.word = this.autobars[this.nowIndex]
                            //                    vm.autobars=[]
                            //                    getWord(vm.word)
                    }
                },
                autoComplete: function() {
                    var self = this
                        // function ajaxRequest(tempURL,word,responseArr){
                        // 	var xhr = new XMLHttpRequest()
                        //     var url = tempURL + word
                        //     xhr.open('GET', url)
                        //     xhr.send()

                    //     xhr.onload = function() {
                    //         var jsonObj = JSON.parse(xhr.responseText)
                    //         responseArr = []
                    //         for (var i = 0; i < jsonObj.results.length; i++) {
                    //             responseArr.push(jsonObj.results[i].searchtext)
                    // 			console.log(responseArr)
                    //         }
                    //     }
                    // }
                    // if(this.word){
                    // ajaxRequest('http://damiao.io:5000/autocomplete/',this.word,self.autobars)
                    // 	console.log("autobar:"+self.autobars)
                    // }else{
                    // 	this.autobars = []
                    // }
                    // }
                    if (this.word) {
                        var xhr = new XMLHttpRequest()
                        var url = 'http://damiao.io:5000/autocomplete/' + this.word
                        xhr.open('GET', url)
                        xhr.send()

                        xhr.onload = function() {
                            var jsonObj = JSON.parse(xhr.responseText)
                            self.autobars = []
                            for (var i = 0; i < jsonObj.results.length; i++) {
                                self.autobars.push(jsonObj.results[i].searchtext)
                            }
                            console.log(this.autobars)
                        }
                    } else {
                        this.autobars = []
                    }
                },
                getWord: function(e, index) {
                    if (index >= 0) {
                        this.nowIndex = index
                        this.word = this.autobars[this.nowIndex]
                    }
                    this.word = this.word.trim().split(' ').join('-')
                    const url =
                        'http://damiao.io:5000/word/' + this.word
                        //const words = []
                    fetch(url)
                        .then(blob => blob.json())
                        .then(data => {
                            this.wordMeaning = []
                            this.wordMeaning.push(...data)
                        })
                    this.autobars = []
                    this.nowIndex = -1
                        // vm.wordMeaning.forEach(
                        //         it => {
                        //             vm.headword.push(it.headword)
                        //             vm.prons.push(it.prons)
                        //         }
                        //     )




                    //TODO： 
                    // 思路： 
                    // 点击传值 word 和 wordMeaning
                    // 单词表单击 传回来wordmeaning 发请求 getword
                    location.hash = this.word

                }
            }
        })
        //通过空Vue实例 兄弟组件通信
    var bus = new Vue()

    Vue.component("wordnote", {
        template: `
			<div class="wordnote">
				<ul >
				<transition-group name="list" tag="p">
					
                        <li  v-bind:key="item" class="list-item"
						v-for="(item, index) in wordnoteList"
						draggable="true"
						@dragstart.stop="handleDragStart($event,index)"
						@dragenter.stop="handleDragEnter($event,index)"
						@dragover.prevent
						@dragleave.stop="handleDragLeave($event,index)"
						@dragend.prevent="handleDragEnd($event,index)"
						@drop.stop="handleDrop($event,index)">
							{{item}}
						<button class="delete" @click="deleteWord($event ,index)">x</button>
					</li>
				</transition-group>
				
				</ul>
			</div>
		`,
        data() {
            return {
                // wordnoteList:[1,2,3,4,5,6,7,8]
                wordnoteList: []
            }
        },
        watch: {
            // wordnoteList(newVal){
            // 	if (wordnoteList.indexOf(newVal[newVal.length - 1]) < 0) {
            // 	this.word = newVal
            // 	}

            //  	}
        },
        // mounted:{
        // 	localStorage.setItem('wordnoteList')
        // },
        computed: {


        },
        // TODO: 单词数据解释存储
        created() {
            if (localStorage.getItem("wordnoteList") === "") {
                localStorage.setItem("wordnoteList", "[]")
            } else {
                this.wordnoteList = JSON.parse(localStorage.getItem("wordnoteList"))
            }

            var self = this
            bus.$on('addWord', function(newWord) {
                if (self.wordnoteList.indexOf(newWord) < 0) {
                    if (newWord.trim() !== "") {
                        self.wordnoteList.push(newWord)
                        localStorage.setItem("wordnoteList", JSON.stringify(self.wordnoteList))
                    }

                }
            })
        },
        methods: {
            deleteWord: function($event, index) {
                this.wordnoteList.splice(index, 1)
                localStorage.setItem("wordnoteList", JSON.stringify(this.wordnoteList))
            },
            handleDragStart($event, index) {
                console.log($event)
                console.log(index)
                this.$el.style.backgroundColor = ''
                var data = this.wordnoteList[index]
                $event.dataTransfer.setData('text/plain', data);
            },
            handleDragEnter($event, index) {

            },
            handleDragLeave($event, index) {

            },
            handleDragEnd($event, index) {

            },
            handleDrop($event, index) {
                this.$el.style.backgroundColor = '#f2f2f2'
                    // document.querySelectorAll('.notelist')[index].style.backgroundColor = "yellow"
                var data = $event.dataTransfer.getData('text/plain')
                var lastIndex = this.wordnoteList.indexOf(data)
                console.log("index:" + lastIndex)
                if (lastIndex > index) {
                    this.wordnoteList.splice(lastIndex, 1)
                    this.wordnoteList.splice(index, 0, data)
                } else if (lastIndex < index) {
                    this.wordnoteList.splice(lastIndex, 1)
                    this.wordnoteList.splice(index, 0, data)
                }
            }

        }
    })
    var vm = new Vue({
        el: "#app",
        data: {
            word: ""
        },
        computed: {

        },
        methods: {

        },
        watch: {

        }
    })