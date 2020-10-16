
(()=> {

	fetch('./data/aboutData.json')
	.then(res => res.json())
	.then(data => {

		//about me page data retrival function
        aboutpage(data);
        // debugger;
    })
    
    function aboutpage(data)
    {
        let aboutTitle = document.querySelector('.aboutTitle p'),
            paraContent = document.querySelector('.aboutPara p');
            // debugger;

            aboutTitle.innerHTML = data.abouttitle;
            paraContent.innerHTML =  data.paragraph[0] + "<br><br>" + data.paragraph[1];

    }

})();
