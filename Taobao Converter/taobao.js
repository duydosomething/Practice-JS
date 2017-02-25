

function convertLink(){
	var link = document.getElementById('taobaolink')
	if(isTaobaoURL(link)){
		console.log('true');
	}
}

function isTaobaoURL(str) {
    var urlPattern = new RegExp('^(https?:\\/\\/)?'+
        '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+
        '((\\d{1,3}\\.){3}\\d{1,3}))'+
        '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+
        '(\\?[;&a-z\\d%_.~+=-]*)?'+
        '(\\#[-a-z\\d_]*)?$','i');
    return urlPattern.test(str) && str.indexOf('taobao.com') != -1;
}