/*

	Redirect Timeout
	
	Requires:		n/a
	Description:	Redirects to a location after a specified time.
					Optionally it will reset the timer when anything 
					in the window is clicked.

*/

function RedirectTimeout(options)
{
	this.options = 
	{
		url: 'index.html',
		time: 1.5*60*1000, //min*sec*msec
		resetOnClick: true
	}
	
	this.init = function()
	{
		if (typeof options != 'undefined')
		{
			for (var attr in options) 
			{
				if (this.options.hasOwnProperty(attr)) this.options[attr] = options[attr];
			}
		}
		
		this.reset();
		
		if (this.options.resetOnClick)
		{
			document.addEventListener('click', function()
			{
				obj.reset();	
			});
		}
	}
	
	this.reset = function()
	{
		if (this.timer)
			clearTimeout(this.timer);
			
		this.timer = setTimeout(function()
		{
			window.location.href = obj.options.url;
		}, this.options.time);
	}
	
	this.timer = null;
	
	var obj = this;
	window.addEventListener('load', function(){obj.init()});
};
