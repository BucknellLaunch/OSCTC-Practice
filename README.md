OSCTC-Practice
==============

Practice site for Open Source Comes to Campus.

Setup
------

Please clone the project and make changes to the HTML page assigned to you. You can add more contents to the page or more visual effects using HTML, CSS or JavaScript. Please make sure that if you want to add external dependencies to your local folder, you need to include them in git and push them to this repository too!

### Adding a group folder
1. Inside the `public/` directory, create a folder whose name is that of your group (now known as `$GROUP`)
2. Copy the `group-template.html` into `index.html` inside the `$GROUP/` folder.
3. Modify `public/index.html` so that there is a button whose name is `$GROUP` and links to the group folder
  * The text within the `<button>` and `</button>` tags contains the name of the button
  * The `http://www.google.com` is the URL that the button will direct to.  You can use site-relative addressing (i.e. putting `/public/$GROUP/` will work
4. Modifying `$GROUP/index.html` will modify your group's page

### Testing
You can see what your page will look like by opening up the `index.html` page locally in your browser.

### Sending Upstream
When you feel like you are ready to share your page with the rest of the world, submit a pull request to `BucknellLaunch/OSCTC-Practice`.  Once we merge in, the public website should be updated ([http://blaunch.dynalias.com](http://blaunch.dynalias.com))
