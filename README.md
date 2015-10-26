Cordova WindowsPhone List Performance Issue
===========================================

This repository is a small test that shows that there are some performance problems running cordova applications in WindowsPhone.

The current detected example is adding/removing classes in a large list while scrolling at the same time. It turns out that the Internet Explorer painting takes up to 2 seconds.

This example is built with Angular, and it uses ngTouch. The ngTouch is used to reduce the time of click (remove the 0.3 delay seconds) and to emulate _hover_ classes in iOS.

Additionally we also have detected that, some times, classes added by ngTouch are not removed later.


How to reproduce
----------------

Create a cordova project:

    C:> cordova create demoproject

Clone the project inside www:

    C:> cd demoproject
    C:> RD /S www
    C:> git clone https://github.com/drpicox/cordova-wp-performanceissue.git

Add bower components:

    C:> cd www
    C:> bower install
    C:> cd ..

Build the project:

    C:> cordova platform add windows
    C:> cordova build windows

Now, open the generated solution in `platform/windows` with VS Express 2003, select target Windows Phone 8.1 , and deploy/run on device.
