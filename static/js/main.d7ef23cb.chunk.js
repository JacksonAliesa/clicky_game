(this.webpackJsonpclicky_game=this.webpackJsonpclicky_game||[]).push([[0],[,,,,,,function(e){e.exports=JSON.parse('[{"id":1,"name":"Jon Snow","image":"https://s2.r29static.com/bin/entry/776/720x1003,85/2184365/image.webp"},{"id":2,"name":"Sansa Stark","image":"https://vignette.wikia.nocookie.net/gameofthrones/images/6/63/QueenSansa.PNG/revision/latest?cb=20190520085809"},{"id":3,"name":"Arya Stark","image":"https://www.unhcr.org/mt/wp-content/uploads/sites/54/2018/03/Arya_stark_s7.jpg"},{"id":4,"name":"Hodor","image":"https://vignette.wikia.nocookie.net/gameofthrones/images/1/18/Season_6_hodor_main.jpg/revision/latest?cb=20160617020835"},{"id":5,"name":"Robb Stark","image":"https://upload.wikimedia.org/wikipedia/en/thumb/c/ce/Robb_Stark-Richard_Madden.jpg/220px-Robb_Stark-Richard_Madden.jpg"},{"id":6,"name":"Cersei Lannister","image":"https://s2.r29static.com/bin/entry/117/430x516,85/1431611/image.webp"},{"id":7,"name":"Theon Greyjoy","image":"https://vignette.wikia.nocookie.net/gameofthrones/images/7/78/TheonS8E1.PNG/revision/latest?cb=20190415192721"},{"id":8,"name":"Tyrion Lannister","image":"https://vignette.wikia.nocookie.net/gameofthrones/images/9/95/HandoftheKingTyrionLannister.PNG/revision/latest?cb=20190520175204"},{"id":9,"name":"Jaime Lannister","image":"https://i.redd.it/6nczgm84q3s21.jpg"},{"id":10,"name":"The Hound","image":"https://upload.wikimedia.org/wikipedia/en/thumb/5/59/The_Hound_in_%27The_Children%27.jpg/220px-The_Hound_in_%27The_Children%27.jpg"},{"id":11,"name":"Daenerys Targaryen","image":"https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/634424-got-hs-1021-ep01-dsc0153-1563559758.jpg?crop=1xw:0.9981203007518797xh;center,top&resize=480:*"},{"id":12,"name":"Ned Stark","image":"https://cdna.artstation.com/p/assets/images/images/001/018/542/large/firat-bilal-son-distort-low.jpg?1438283691"}]')},,,function(e,t,a){e.exports=a(17)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(2),o=a.n(r),s=(a(14),a(3)),c=a(4),l=a(7),m=a(5),d=a(8),g={navbarStyle:{backgroundColor:"black",justifyContent:"center",height:"100px",textAlign:"center",opacity:.5}};var p=function(){return i.a.createElement("nav",{className:"navbar",style:g.navbarStyle},i.a.createElement("div",null,i.a.createElement("h1",{style:{color:"yellow"}},"Clicky Game: G.O.T. Edition"),i.a.createElement("h5",{style:{color:"yellow"}},"Click each character once OR get sent to the wall")))};a(15);var u=function(e){return i.a.createElement("div",{className:"col-sm-3"},i.a.createElement("div",{className:"card",onClick:function(){return e.onClick(e.id)}},i.a.createElement("div",{className:"img-container"},i.a.createElement("img",{alt:e.name,src:e.image,id:e.id}))))},h={wrapperStyles:{backgroundImage:'url("https://wallpaperaccess.com/full/808172.png")',backgroundSize:"contain",justifyContent:"flex-end"}};var k=function(e){return i.a.createElement("div",{className:"wrapper",style:h.wrapperStyles},e.children)};a(16);var f=function(e){return i.a.createElement("div",{id:"scoreSection"},i.a.createElement("div",{className:"col-12"},i.a.createElement("h7",null,"Top Score: ",e.highScore)),i.a.createElement("div",{className:"col-12"},i.a.createElement("h7",null,"Current Score: ",e.score)))},y=a(6),v=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(a=Object(l.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(i)))).state={friends:y,clicks:[],score:0,topscore:0},a.randomImg=function(){a.setState({friends:a.state.friends.sort((function(){return Math.random()-.5}))})},a.resetGame=function(){a.setState({score:0}),a.setState({clicks:[]})},a.countFriends=function(e){a.randomImg();var t=a.state.score,n=a.state.topscore;if(console.log('"ID:" '.concat(e)),a.state.clicks.includes(e))alert("Pack your bags! You are getting sent to the wall!"),a.resetGame();else{a.state.clicks.push(e);var i=t+1;a.setState({score:i}),i>n&&(a.setState({topscore:i}),12===i&&(alert("Yay you won! You can stay in your kingdom!"),a.resetGame()))}},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return i.a.createElement(k,null,i.a.createElement(p,null),i.a.createElement("div",{className:"row"},i.a.createElement(f,{topscore:this.state.topscore,score:this.state.score})),i.a.createElement("div",{className:"row"},this.state.friends.map((function(t){return i.a.createElement(u,{onClick:function(){return e.countFriends(t.id)},name:t.name,image:t.image,id:t.id,key:t.id})}))))}}]),t}(i.a.Component);o.a.render(i.a.createElement(v,null),document.getElementById("root"))}],[[9,1,2]]]);
//# sourceMappingURL=main.d7ef23cb.chunk.js.map