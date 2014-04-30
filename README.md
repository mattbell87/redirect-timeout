Redirect Timeout
================

A configurable javascript utility class that sets a timeout on your page before redirecting. The timer resets when you click something on the page.

## Usage
```html
<script src="redirect.js"></script>
<script>
	var timeout = new RedirectTimeout(
	{
		url: 'index.html',    //URL to redirect to
		time: 1.5*60*1000,    //Time taken before it redirects 
						// (min*sec*msec, 1.5 minutes shown here)
		resetOnClick: true    //Reset the timer when something on the page is clicked 
						// (defaults to true)
	});
</script>
```
