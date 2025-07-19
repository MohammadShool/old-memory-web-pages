document.getElementById("beforeLoading").style.animationDuration = "2s";
document.getElementById("beforeLoading").style.animationName = "DisplayNoneBeforeLoading";
document.getElementById("beforeLoading").style.animationiIterationCount = "0";
setTimeout(function() {
    document.getElementById("beforeLoading").style.display = "none";  
},2000);

var flexBox = new Vue({
	el: '#Main',
	data:{
		HeaderLinks: [
			{Text: "مستندات",Lick: "#"},
			{Text: "درباره ما",Lick: "#"},
			{Text: "پادکست های اموزشی",Lick: "#"},
			{Text: "اموزش ها",Lick: "#"}
		],
		flexBoxs:[
			{Title: 'سلام',Text: 'You disposal strongly quitting his endeavor two settling him. Manners ham him hearted hundred expense. Get open game him what hour more part. Adapted as smiling of females oh me journey exposed concern. Met come add cold calm rose mile what. Tiled manor court at built by place fanny. Discretion at be an so decisively especially. Exeter itself object matter if on mr in. Effect if in up no depend seemed. Ecstatic elegance gay but disposed. We me rent been part what. An concluded sportsman offending so provision mr education. Bed uncommonly his discovered for estimating far. Equally he minutes my hastily. Up hung mr we give rest half. Painful so he an comfort is manners', Link: '#', imageLink: ''},
			{Title: 'سلام',Text: 'You disposal strongly quitting his endeavor two settling him. Manners ham him hearted hundred expense. Get open game him what hour more part. Adapted as smiling of females oh me journey exposed concern. Met come add cold calm rose mile what. Tiled manor court at built by place fanny. Discretion at be an so decisively especially. Exeter itself object matter if on mr in. Effect if in up no depend seemed. Ecstatic elegance gay but disposed. We me rent been part what. An concluded sportsman offending so provision mr education. Bed uncommonly his discovered for estimating far. Equally he minutes my hastily. Up hung mr we give rest half. Painful so he an comfort is manners', Link: '#', imageLink: ''},
			{Title: 'سلام',Text: 'You disposal strongly quitting his endeavor two settling him. Manners ham him hearted hundred expense. Get open game him what hour more part. Adapted as smiling of females oh me journey exposed concern. Met come add cold calm rose mile what. Tiled manor court at built by place fanny. Discretion at be an so decisively especially. Exeter itself object matter if on mr in. Effect if in up no depend seemed. Ecstatic elegance gay but disposed. We me rent been part what. An concluded sportsman offending so provision mr education. Bed uncommonly his discovered for estimating far. Equally he minutes my hastily. Up hung mr we give rest half. Painful so he an comfort is manners', Link: '#', imageLink: ''},
			{Title: 'سلام',Text: 'You disposal strongly quitting his endeavor two settling him. Manners ham him hearted hundred expense. Get open game him what hour more part. Adapted as smiling of females oh me journey exposed concern. Met come add cold calm rose mile what. Tiled manor court at built by place fanny. Discretion at be an so decisively especially. Exeter itself object matter if on mr in. Effect if in up no depend seemed. Ecstatic elegance gay but disposed. We me rent been part what. An concluded sportsman offending so provision mr education. Bed uncommonly his discovered for estimating far. Equally he minutes my hastily. Up hung mr we give rest half. Painful so he an comfort is manners', Link: '#', imageLink: ''},
			{Title: 'سلام',Text: 'You disposal strongly quitting his endeavor two settling him. Manners ham him hearted hundred expense. Get open game him what hour more part. Adapted as smiling of females oh me journey exposed concern. Met come add cold calm rose mile what. Tiled manor court at built by place fanny. Discretion at be an so decisively especially. Exeter itself object matter if on mr in. Effect if in up no depend seemed. Ecstatic elegance gay but disposed. We me rent been part what. An concluded sportsman offending so provision mr education. Bed uncommonly his discovered for estimating far. Equally he minutes my hastily. Up hung mr we give rest half. Painful so he an comfort is manners', Link: '#', imageLink: ''},
			{Title: 'سلام',Text: 'You disposal strongly quitting his endeavor two settling him. Manners ham him hearted hundred expense. Get open game him what hour more part. Adapted as smiling of females oh me journey exposed concern. Met come add cold calm rose mile what. Tiled manor court at built by place fanny. Discretion at be an so decisively especially. Exeter itself object matter if on mr in. Effect if in up no depend seemed. Ecstatic elegance gay but disposed. We me rent been part what. An concluded sportsman offending so provision mr education. Bed uncommonly his discovered for estimating far. Equally he minutes my hastily. Up hung mr we give rest half. Painful so he an comfort is manners', Link: '#', imageLink: ''},
			{Title: 'سلام',Text: 'You disposal strongly quitting his endeavor two settling him. Manners ham him hearted hundred expense. Get open game him what hour more part. Adapted as smiling of females oh me journey exposed concern. Met come add cold calm rose mile what. Tiled manor court at built by place fanny. Discretion at be an so decisively especially. Exeter itself object matter if on mr in. Effect if in up no depend seemed. Ecstatic elegance gay but disposed. We me rent been part what. An concluded sportsman offending so provision mr education. Bed uncommonly his discovered for estimating far. Equally he minutes my hastily. Up hung mr we give rest half. Painful so he an comfort is manners', Link: '#', imageLink: ''},
			{Title: 'سلام',Text: 'You disposal strongly quitting his endeavor two settling him. Manners ham him hearted hundred expense. Get open game him what hour more part. Adapted as smiling of females oh me journey exposed concern. Met come add cold calm rose mile what. Tiled manor court at built by place fanny. Discretion at be an so decisively especially. Exeter itself object matter if on mr in. Effect if in up no depend seemed. Ecstatic elegance gay but disposed. We me rent been part what. An concluded sportsman offending so provision mr education. Bed uncommonly his discovered for estimating far. Equally he minutes my hastily. Up hung mr we give rest half. Painful so he an comfort is manners', Link: '#', imageLink: ''}
		],
		Categoris:[
			{
				Title: 'بازی سازی',
				imageLink: 'image/programmers.webp',
				FlexItem: [
				{
					Title: 'بازی سازی',
					Text: 'این یک متن اموزشی است',
					Link: '#',
					imageLink: 'image/programmers.webp'
				},
				{
					Title: 'بازی سازی',
					Text: 'این یک متن اموزشی است',
					Link: '#',
					imageLink: 'image/programmers.webp'
				},
				{
					Title: 'بازی سازی',
					Text: 'این یک متن اموزشی است',
					Link: '#',
					imageLink: 'image/programmers.webp'
				},
				{
					Title: 'بازی سازی',
					Text: 'این یک متن اموزشی است',
					Link: '#',
					imageLink: 'image/programmers.webp'
				}
				]
			},
			{
				Title: 'بازی سازی',
				imageLink: 'image/programmers.webp',
				FlexItem: [
				{
					Title: 'بازی سازی',
					Text: 'این یک متن اموزشی است',
					Link: '#',
					imageLink: 'image/programmers.webp'
				},
				{
					Title: 'بازی سازی',
					Text: 'این یک متن اموزشی است',
					Link: '#',
					imageLink: 'image/programmers.webp'
				},
				{
					Title: 'بازی سازی',
					Text: 'این یک متن اموزشی است',
					Link: '#',
					imageLink: 'image/programmers.webp'
				},
				{
					Title: 'بازی سازی',
					Text: 'این یک متن اموزشی است',
					Link: '#',
					imageLink: 'image/programmers.webp'
				}
				]
			}
		]
	}
});

var CheckHowStepShowMenu = true;

function ShowMenu(){
	if (CheckHowStepShowMenu) {
		document.getElementById("navmoblie").style.animationDuration = ".2s";
		document.getElementById("navmoblie").style.animationName = "ShowMenus";
		document.getElementById("navmoblie").style.animationiIterationCount = "0";
		setTimeout(function() {
    		document.getElementById("navmoblie").style.display = "block";
    		document.getElementById("navmoblie").style.width = "70%";
		},200);
		document.getElementById('backgroundgrayMenuCloser').style.display = "block";
		CheckHowStepShowMenu = false;
	}else{
		document.getElementById("navmoblie").style.animationDuration = ".2s";
		document.getElementById("navmoblie").style.animationName = "noShowMenus";
		document.getElementById("navmoblie").style.animationiIterationCount = "0";
		setTimeout(function() {
    		document.getElementById("navmoblie").style.display = "none";
    		  document.getElementById("navmoblie").style.width = "0px";
		},200);
		document.getElementById('backgroundgrayMenuCloser').style.display = "none";
		CheckHowStepShowMenu = true;
	}
}