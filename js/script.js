const APP = new Vue({
  el:'#app',
  data: {
    chatindex: 0 ,
    emotiHidden : true ,
    emoticonArray:['😀','😾', '😃', '😄', '😆', '😅', '😂', '🤣','😊', '😇', '🙂', '🙃', '😉', '😌', '😍', '🥰', '😘', '😋', '😛', '😝', '😜', '😎', '🤩', '🥳', '😏', '😒', '😞', '😔','😖', '😫', '😩', '🥺','😢','😭','😤','🤬','🤯','😳','🥵','🥶','😱','😨','😰','😥','😓','🤗','😐','😬','🙄','😯','😦','😮','😲','🥱', '😴','😪', '😵', '🤐', '🤢', '🤮', '🤧', '😷', '🤒' ,'🤕' ,'🤑' ,'🤠' ,'😈' ,'👹' ,'👺' ,'🤡' ,'💩' ,'👻', '💀', '👽' , '🤖' ,'🎃','😺'],
    textarea : '',
    contacts :[{
      name:'Michele',
      lastOnline :'10/01/2020 16:15:55',
      img : 'assets/avatar_1.jpg',
      messages :[
        {text:'vieni  bere una birra?',status: 'received',datainfo:'10/01/2020 16:14:50'},
        {text:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',status:'sent',datainfo:'10/01/2020 16:15:00'},
        {text:'WTF!!? che problemi hai?!',status: 'received',datainfo:'10/01/2020 16:14:50'},
      ]
    },
    {
      name:'Fabio',
      lastOnline :'20/05/2020 20:20:55',
      img:'assets/avatar_2.jpg',
      messages :[
        {text:'chi sei?!',status:'received',datainfo:'20/05/2020 20:18:50'},
        {text:'no chi sei tu',status:'sent',datainfo:'20/05/2020 20:19:00'},
        {text:'vaffanculo!',status:'received',datainfo:'20/05/2020 20:19:35'},
        {text:'no vaffanculo tu!',status:'sent',datainfo:'20/05/2020 20:20:00'}
        ]
    },
    {
      name:'Abdul',
      lastOnline:'25/12/2019 18:55:59',
      img:'assets/avatar_3.jpg',
      messages:[
        {text:'ciao abdul ci sei per un cd verde veloce?',status:'sent',datainfo:'25/12/2019 18:50:00'},
        {text:'ciao amico 20 euro',status:'received',datainfo:'25/12/2019 18:51:00'},
        {text:'ascolta ne ho solo dieci perche la  tirchia di mia nonna non mi ha lasciato la mancia per natale',status:'sent',datainfo:'18:51:03'},
        {text:'nono 20 euro o niente',status:'received',datainfo:'25/12/2019 18:52:02'},
        {text:'ti do 10 euro e un paio di guanti nuovi di pacca che a te vanno bene co sto freddo', status:'sent',datainfo:'25/12/2019 18:52:04'},
        {text:'nononono cash o niente',status:'received',datainfo:'25/12/2019 18:55:00'},
        {text:'mai dai abdul è natale',status:'sent',datainfo:'25/12/2019 18:55:02'},
        {text:'cazo mi frega di natale io musulmano',status:'received',datainfo:'25/12/2019 18:55:59'}
      ]
    },
    {
      name:'Luisa',
      lastOnline:'23/11/2020 15:00:55',
      img:'assets/avatar_4.jpg',
      messages:[
        {text:'ciao',status:'received',datainfo:'20/11/2019 15:00:02'},
        {text:'non so chi sei ma mi piacciono molto i tuoi baffi',status:'sent',datainfo:'20/11/2019 15:55:00'}
      ]
    }
  ]
  },
  methods:{
    toogleEmoji(){
      this.emotiHidden = !this.emotiHidden
    },
    writeEmoji(i){
      this.textarea += this.emoticonArray[i];
    }
  }
});
