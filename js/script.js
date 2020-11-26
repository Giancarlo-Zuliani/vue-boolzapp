const APP = new Vue({
  el:"#app",
  data: {
    answer:"",
    chatindex: 0 ,
    searchInput :"",
    emotiHidden : true ,
    emoticonArray:["😀","😾", "😃", "😄", "😆", "😅", "😂", "🤣","😊", "😇", "🙂", "🙃", "😉", "😌", "😍", "🥰", "😘", "😋", "😛", "😝", "😜", "😎", "🤩", "🥳", "😏", "😒", "😞", "😔","😖", "😫", "😩", "🥺","😢","😭","😤","🤬","🤯","😳","🥵","🥶","😱","😨","😰","😥","😓","🤗","😐","😬","🙄","😯","😦","😮","😲","🥱", "😴","😪", "😵", "🤐", "🤢", "🤮", "🤧", "😷", "🤒" ,"🤕" ,"🤑" ,"🤠" ,"😈" ,"👹" ,"👺" ,"🤡" ,"💩" ,"👻", "💀", "👽" , "🤖" ,"🎃","😺"],
    textarea : "",
    contacts :[{
      name:"Michele",
      lastOnline :"10/01/2020 16:15:55",
      img : "assets/avatar_1.jpg",
      display: true,
      messages :[
        {text:"vieni  bere una birra?",status: "received",datainfo:"10/01/2020 16:14:50",dropdown:false},
        {text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",status:"sent",datainfo:"10/01/2020 16:15:00",dropdown:false},
        {text:"WTF!!? ma che problemi hai?!",status: "received",datainfo:"10/01/2020 16:14:50",dropdown:false},
      ]
    },
    {
      name:"Fabio",
      lastOnline :"20/05/2020 20:20:55",
      img:"assets/avatar_2.jpg",
      display: true,
      messages :[
        {text:"chi sei?!",status:"received",datainfo:"20/05/2020 20:18:50",dropdown:false},
        {text:"no chi sei tu",status:"sent",datainfo:"20/05/2020 20:19:00",dropdown:false},
        {text:"vaffanculo!",status:"received",datainfo:"20/05/2020 20:19:35",dropdown:false},
        {text:"no vaffanculo tu!",status:"sent",datainfo:"20/05/2020 20:20:00",dropdown:false}
        ]
    },
    {
      name:"Abdul",
      lastOnline:"25/12/2019 18:55:59",
      img:"assets/avatar_3.jpg",
      display: true,
      messages:[
        {text:"ciao abdul ci sei per un cd verde veloce?",status:"sent",datainfo:"25/12/2019 18:50:00",dropdown:false},
        {text:"ciao amico 20 euro",status:"received",datainfo:"25/12/2019 18:51:00",dropdown:false},
        {text:"ascolta ne ho solo dieci perche la  tirchia di mia nonna non mi ha lasciato la mancia per natale",status:"sent",datainfo:"18:51:03",dropdown:false},
        {text:"nono 20 euro o niente",status:"received",datainfo:"25/12/2019 18:52:02",dropdown:false},
        {text:"ti do 10 euro e un paio di guanti nuovi di pacca che a te vanno bene co sto freddo", status:"sent",datainfo:"25/12/2019 18:52:04",dropdown:false},
        {text:"nononono cash o niente",status:"received",datainfo:"25/12/2019 18:55:00",dropdown:false},
        {text:"mai dai abdul è natale",status:"sent",datainfo:"25/12/2019 18:55:02",dropdown:false},
        {text:"cazo mi frega di natale io musulmano",status:"received",datainfo:"25/12/2019 18:55:59",dropdown:false}
      ]
    },
    {
      name:"Luisa",
      lastOnline:"23/11/2020 15:00:55",
      img:"assets/avatar_4.jpg",
      display: true,
      messages:[
        {text:"ciao",status:"received",datainfo:"20/11/2019 15:00:02",dropdown:false},
        {text:"non so chi sei ma mi piacciono molto i tuoi baffi",status:"sent",datainfo:"20/11/2019 15:55:00",dropdown:false}
      ]
    }
  ]
  },
  methods:{
    //TOGGLE EMOTICON CONTAINER
    toggleEmoji(){
      this.emotiHidden = !this.emotiHidden;
      this.$refs.newmessage.focus();
    },
    //WRITE DOWN EMOTICON ON TEXT INPUT
    writeEmoji(i){
      this.textarea += this.emoticonArray[i];
      this.$refs.newmessage.focus();
    },
    //THIS FUNCTION RETURN A PREVIEW OF THE LAST MESSAGE FOR EVERY CONVERSATION
    textPreview(i){
      let index = (this.contacts[i].messages.length) - 1;
      let text = this.contacts[i].messages[index].text;
      let preview = text.substring(0,10) + "...";
      return preview;
    },
    //SEARCH CONTACT ON KEY UP FUNCTION
    searchContact(){
      this.contacts.forEach(item => {
        if(item.name.toLowerCase().includes(this.searchInput.toLowerCase())){
          item.display = true;
        }else{
          item.display = false;
        };
      });
    },
    //TOOGLE DELETE DROPDOWN
    toggleDropdown(i){
      this.contacts[this.chatindex].messages[i].dropdown = !(this.contacts[this.chatindex].messages[i].dropdown);
    },
    //SEND MESSAGES FUNCTION
    addMessage(){
      if(this.textarea !== ""){
        this.messageSentSound();
        let newmessage = {text:this.textarea,status:"sent",datainfo : this.getDate(),dropdown:false};
        this.contacts[this.chatindex].lastOnline ='online'
        this.contacts[this.chatindex].messages.push(newmessage);
        this.textarea = "";
        this.scrollDown();
        this.getRandomApiAnswer();
        this.autoAnswer();
      };
    },
    //THIS FUNCTION RETURN DATE AND TIME IN RIGHT FORMAT
    getDate(){
      let x = new Date();
      let hours = x.getHours().toString();
      if(hours.length === 1) hours = "0" + hours;
      let minutes = x.getMinutes().toString();
      if(minutes.length === 1) minutes = "0" + minutes;
      let seconds = x.getSeconds().toString();
      if(seconds.length === 1) seconds = "0" + seconds;
      let datatext = x.getMonth() + 1 + "/" + x.getDate() + "/" + x.getFullYear() + "  " + hours + ":" + minutes + ":" + seconds;
      return datatext;
    },
    //DELETE MESSAGE
    deleteMessage(i){
      this.contacts[this.chatindex].messages.splice(i,1);
    },
    autoAnswer(){
      setTimeout(()=>{
        let newmessage = {text:this.answer.value.joke,status:"received",datainfo:this.getDate(),dropdown:false};
        this.contacts[this.chatindex].lastOnline = this.getDate();
        this.contacts[this.chatindex].messages.push(newmessage);
        this.scrollDown();
        this.messageReceivedSound();
      },1000)
    },
    //SCROLLDOWN
    scrollDown(){
      setTimeout(()=>{
        var container = document.querySelector("section");
        container.scrollTop = container.scrollHeight;
      },5);
    },
    //FETCH FOR RANDOM ANSWERS FROM ICNDB.COM
    getRandomApiAnswer(){
      var myHeaders = new Headers();
      myHeaders.append("Cookie", "__cfduid=d3448bb0d99f36d7b6452d9282d20fec91606234727");
      var requestOptions = {
        method: "GET",
        headers: myHeaders,
        redirect: "follow"
      };

      fetch("http://api.icndb.com/jokes/random", requestOptions)
      .then(response => response.text())
      .then(result =>{
        this.answer = JSON.parse(result);
        console.log(this.answer)
        })
        .catch(error => console.log("error", error));
    },
    //NEW CHAT FUNCTION
    newChat(){
      let finded = false;
      this.contacts.forEach((item) => {
        if(item.name === this.searchInput){
          finded = true
        };
      });
      if(this.searchInput!='' && finded === false){
        let x = new contact(this.searchInput);
        this.contacts.push(x);
      }
    },
    // SOUNDS
    messageSentSound(){
      var audio = new Audio("assets/message_sent.mp3");
      audio.volume = 0.1;
      audio.play();
    },
    messageReceivedSound(){
      var audio = new Audio("assets/incoming.mp3");
      audio.volume = 0.1;
      audio.play();
    }
  }
});

//CONSTRUCTOR FOR NEW CONVERSATION
class contact {
  constructor(name){
    this.name = name;
    this.lastOnline = '';
    this.img =  getRandomAvatar();
    this.display = true;
    this.messages = [];
  }
};
//THIS FUNCTION RETURN A RANDOM AVATAR
function getRandomAvatar(){
  let num = Math.floor(Math.random()*8) + 1;
  return 'assets/avatar_' + num + '.jpg'
};
