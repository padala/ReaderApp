Ext.define("SlideNavigationExample.view.Main", {
    extend: 'Ext.ux.slidenavigation.View',

    requires: [
        'Ext.Container',
        'Ext.MessageBox',
        'Ext.Panel',
        'Ext.Toolbar',
        'Ext.event.publisher.Dom',
        'Ext.Img',
        'SlideNavigationExample.view.BottomTabs'
    ],

    config: {
        fullscreen: true,

        /**
         *  Any component within the container with an 'x-toolbar' class
         *  will be draggable.  To disable draggin all together, set this
         *  to false.
         */
        slideSelector: 'x-toolbar',

        /**
         *  Container must be dragged 10 pixels horizontally before allowing
         *  the underlying container to actually be dragged.
         *
         *  @since 0.2.2
         */
        containerSlideDelay: 10,

        /**
         *  Time in milliseconds to animate the closing of the container
         *  after an item has been clicked on in the list.
         */
        selectSlideDuration: 200,

        /**
         *  Enable content masking when container is open.
         *
         *  @since 0.2.0
         */
        itemMask: true,

        /**
         *  Define the default slide button config.  Any item that has
         *  a `slideButton` value that is either `true` or a button config
         *  will use these values at the default.
         */
        slideButtonDefaults: {
            selector: 'toolbar'
        },

        /**
         *  This allows us to configure how the actual list container
         *  looks.  Here we've added a custom search field and have
         *  modified the width.
         */
        list: {
            maxDrag: 400,
            width: 200,
            items: [{
                xtype: 'toolbar',
                docked: 'top',
                ui: 'light',
                // style: 'background:none !important; background-image:url("resources/images/cbLogo-local.png") !important; background-repeat: no-repeat;',
                // title: {
                //     title: 'Distributed Rater',
                //     centered: false,
                //     width: 300,
                //     left: 0
                // },

                items: [{
                    xtype: 'image',
                    src: "resources/images/cbLogo-local.png",
                    style: "width:100%;height:100%;"
                }]

                /**
                 *  Here's an example of how to add a different type of
                 *  component into the toolbar of the list.
                 */
                /*
                items: [{
                    docked: 'top',
                    xtype: 'searchfield',
                    placeHolder: 'search',
                    width: 180
                }]
                */
            }]

        },

        /**
         *  Change this to 'right' to dock the navigation list to the right.
         */
        listPosition: 'left',

        /**
         *  Example of how to re-order the groups.
         */
        // groups: {
        //     'Actions': 1,
        //     'Utilities': 2,
        //     'Social': 3
        // },

        /**
         *  These are the default values to apply to the items within the
         *  container.
         */
        defaults: {
            style: 'background: #fff',
            xtype: 'container'
        },

        items: [{
                title: 'Home',
                group: 'Reader App',

                // Enable the slide button using the defaults defined above in
                // `slideButtonDefaults`.
                slideButton: true,
                items: [{
                        xtype: 'toolbar',
                        title: 'Welcome',
                        docked: 'top'
                    },
                    // {
                    //     xtype: 'panel',
                    //     style: 'text-align:center;margin:0 auto;height:100%',
                    //     styleHtmlContent: true,
                    //     // html: '<img src="resources/images/guide.jpg" width="100%" />',
                    //     html: '<h1>Welcome to Distributed Rater App</h1>',

                    //     // Mask this item when the container is opened
                    //     maskOnOpen: true
                    // },
                    {
                        xtype: 'bottomTabs'
                    }
                ]
            }, {
                title: 'Schedule',
                // group: 'Actions',
                group: 'Reader App',
                slideButton: true,

                /**
                 *  Here's an example of how an item can simply execute a
                 *  function, rather than display a new component.
                 */
                items: [{
                    xtype: 'toolbar',
                    title: 'Schedule',
                    docked: 'top'
                }, {
                    xtype: 'panel',
                    layout: 'card',
                    styleHtmlContent: true,
                    html: '<p>The toolbar on this page doesn\'t have a slideButton, so you\'ll have to "slide" the toolbar to view the menu.</p><p>Donec neque augue, fermentum quis tempor quis, lacinia ut augue. Sed dictum risus id arcu vehicula sed porttitor nisi egestas. Aliquam arcu felis, sagittis vel pulvinar vitae, ultricies a augue. Praesent eget erat tellus. Aenean nec dui magna. Cras sagittis, diam vel bibendum mattis, neque purus placerat turpis, sit amet tempor neque nisl non eros. Pellentesque id orci nulla, nec eleifend quam. Proin ut magna turpis. Phasellus erat urna, faucibus in tempus bibendum, ultrices a mauris. Nulla semper ante sed est placerat sagittis. Nam ut vestibulum nulla. Sed sit amet aliquet urna. Morbi est velit, vulputate quis pretium vitae, lobortis sed ligula.</p>',
                    scrollable: true,
                    maskOnOpen: true
                }],
                // handler: function() {
                //     Ext.Msg.alert('Item 2', 'You clicked Item 2.');
                // }
            }, {
                title: 'Videos',
                // group: 'Utilities',
                group: 'Reader App',
                slideButton: true,

                items: [{
                    xtype: 'toolbar',
                    title: 'Videos',
                    docked: 'top'
                }, {
                    xtype: 'panel',
                    // layout: 'vbox',
                    scrollable: 'vertical',
                    style: "text-align:center;padding-top:10px",
                    styleHtmlContent: true,
                    defaults: {
                        style: "float:left !important;text-align: center; margin: 10px auto; box-shadow: " +
                            "#999 0px 0px 6px 2px; border: 1px solid #888; " +
                            "overflow: hidden;",
                        height: 200,
                        width: '50%'
                    },

                    items: [{
                        xtype: "image",
                        src: "resources/images/videoThumbnails-01.jpg",
                        listeners: [{
                            event: 'tap',
                            fn: function() {
                                window.open("http://vidego.multicastmedia.com/player.php?p=tmgr0ri6",
                                    "newwindow", "height=295,width=352",
                                    "toolbar=no,menubar=no,resizable=no,scrollbars=no,status=no,location=no");
                            }
                        }]
                    }, {
                        xtype: "image",
                        src: "resources/images/videoThumbnails-02.jpg",
                        listeners: [{
                            event: 'tap',
                            fn: function() {
                                window.open(
                                    "http://vidego.multicastmedia.com/player.php?p=d64v1lc3",
                                    "newwindow", "height=295,width=352",
                                    "toolbar=no,menubar=no,resizable=no,scrollbars=no,status=no,location=no");
                            }
                        }]
                    }, {
                        xtype: "image",
                        src: "resources/images/videoThumbnails-03.jpg",
                        listeners: [{
                            event: 'tap',
                            fn: function() {
                                window.open(
                                    "http://vidego.multicastmedia.com/player.php?p=y40im5i3",
                                    "newwindow", "height=295,width=352",
                                    "toolbar=no,menubar=no,resizable=no,scrollbars=no,status=no,location=no");
                            }
                        }]
                    }],
                    // html: '<p>The toolbar on this page doesn\'t have a slideButton, so you\'ll have to "slide" the toolbar to view the menu.</p><p>Donec neque augue, fermentum quis tempor quis, lacinia ut augue. Sed dictum risus id arcu vehicula sed porttitor nisi egestas. Aliquam arcu felis, sagittis vel pulvinar vitae, ultricies a augue. Praesent eget erat tellus. Aenean nec dui magna. Cras sagittis, diam vel bibendum mattis, neque purus placerat turpis, sit amet tempor neque nisl non eros. Pellentesque id orci nulla, nec eleifend quam. Proin ut magna turpis. Phasellus erat urna, faucibus in tempus bibendum, ultrices a mauris. Nulla semper ante sed est placerat sagittis. Nam ut vestibulum nulla. Sed sit amet aliquet urna. Morbi est velit, vulputate quis pretium vitae, lobortis sed ligula.</p>',
                    scrollable: true,
                    maskOnOpen: true
                }]
            }, {
                title: 'Resources',
                group: 'Reader App',
                // group: 'Utilities',
                slideButton: true,
                items: [{
                    xtype: 'toolbar',
                    title: 'Resources',
                    docked: 'top'
                }, {
                    styleHtmlContent: true,
                    xtype: 'panel',
                    layout: 'card',
                    html: '<ul id="nav"><li id="topnav1" class="first"><a href="http://advocacy.collegeboard.org/">Education Policy &amp; Advocacy</a></li><li id="topnav2"><a href="http://membership.collegeboard.org/">Membership</a></li><li id="topnav3"><a href="http://professionals.collegeboard.com/testing">Testing</a></li><li id="topnav4"><a href="http://professionals.collegeboard.com/guidance">College Guidance</a></li><li id="topnav5"><a href="http://professionals.collegeboard.com/k-12">K–12 Services</a></li><li id="topnav6"><a href="http://professionals.collegeboard.com/higher-ed">Higher Ed Services</a></li><li id="topnav7"><a href="http://professionals.collegeboard.com/prof-dev">Professional Development</a></li><li id="topnav8" class="last"><a href="http://professionals.collegeboard.com/data-reports-research">Data, Reports &amp; Research</a></li></ul>'

                    // <h2>Item 4</h2><p>The toolbar for this item is at the bottom, which has a slideButton and uses a different icon.</p>'
                }]
            },
            // {
            //     title: 'Item 5',
            //     group: 'Utilities',
            //     slideButton: true,
            //     // slideButton: {
            //     //     selector: 'container',
            //     //     iconMask: false,
            //     //     text: 'toggle navigation'
            //     // },
            //     items: [{
            //         style: 'padding: 10px',
            //         html: '<h2>Item 5</h2><p>Here we\'ve added a slideButton to a location other than a toolbar with text instead of an icon.</p>'
            //     }]

            // },
            {
                title: 'Item 6',
                group: 'Reader App',
                // group: 'Social',
                items: [{
                    xtype: 'toolbar',
                    title: 'Item 6',
                    docked: 'top'
                }, {
                    html: '<h1>Item 6</h1>'
                }]
            }, {
                title: 'Item 7',
                group: 'Reader App',
                // group: 'Social',
                // 
                // Explicitly disable `slideButton` (this is the default)
                slideButton: false,

                items: [{
                    xtype: 'toolbar',
                    title: 'Item 7',
                    docked: 'top'
                }, {
                    html: '<h1>Item 7</h1>'
                }]
            }, {
                title: 'Item 8',
                group: 'Reader App',
                // group: 'Social',
                // order: 0,

                // Extend `slideButtonDefaults`
                slideButton: {
                    iconMask: false,
                    iconCls: null,
                    text: 'menu'
                },

                items: [{
                    xtype: 'toolbar',
                    title: 'Item 8',
                    docked: 'top'
                }, {
                    xtype: 'container',
                    scrollable: 'vertical',
                    style: 'margin: auto !important; text-align: center;',
                    maskOnOpen: true,
                    defaults: {
                        style: "float: left; margin: 10px; box-shadow: " +
                            "#999 0px 0px 6px 2px; border: 1px solid #888; " +
                            "overflow: hidden;",
                        height: 170,
                        width: 110
                    },
                    items: [{
                        html: '<img class="image-wrap" src="http://content6.flixster.com/movie/11/13/43/11134356_pro.jpg" />'
                    }, {
                        html: '<img class="image-wrap" src="http://content9.flixster.com/movie/11/16/11/11161107_pro.jpg" />'
                    }, {
                        html: '<img class="image-wrap" src="http://content8.flixster.com/movie/11/16/10/11161098_pro.jpg" />'
                    }, {
                        html: '<img class="image-wrap" src="http://content6.flixster.com/movie/11/15/75/11157588_pro.jpg" />'
                    }, {
                        html: '<img class="image-wrap" src="http://content9.flixster.com/movie/11/16/13/11161343_pro.jpg" />'
                    }, {
                        html: '<img class="image-wrap" src="http://content6.flixster.com/movie/11/16/12/11161272_pro.jpg" />'
                    }, {
                        html: '<img class="image-wrap" src="http://content7.flixster.com/movie/11/16/24/11162445_pro.jpg" />'
                    }, {
                        html: '<img class="image-wrap" src="http://content8.flixster.com/movie/11/15/92/11159214_pro.jpg" />'
                    }, {
                        html: '<img class="image-wrap" src="http://content8.flixster.com/movie/11/16/03/11160390_pro.jpg" />'
                    }, {
                        html: '<img class="image-wrap" src="http://content8.flixster.com/movie/11/16/05/11160598_pro.jpg" />'
                    }, {
                        html: '<img class="image-wrap" src="http://content8.flixster.com/movie/11/16/09/11160942_pro.jpg" />'
                    }, {
                        html: '<img class="image-wrap" src="http://content7.flixster.com/movie/11/15/25/11152577_pro.jpg" />'
                    }, {
                        html: '<img class="image-wrap" src="http://content8.flixster.com/movie/11/16/09/11160962_pro.jpg" />'
                    }, {
                        html: '<img class="image-wrap" src="http://content6.flixster.com/movie/11/16/02/11160244_pro.jpg" />'
                    }, {
                        html: '<img class="image-wrap" src="http://content9.flixster.com/movie/11/16/25/11162555_pro.jpg" />'
                    }, {
                        html: '<img class="image-wrap" src="http://content9.flixster.com/movie/11/15/83/11158339_pro.jpg" />'
                    }, {
                        html: '<img class="image-wrap" src="http://content6.flixster.com/movie/11/15/65/11156544_pro.jpg" />'
                    }, {
                        html: '<img class="image-wrap" src="http://content7.flixster.com/movie/11/15/66/11156693_pro.jpg" />'
                    }, {
                        html: '<img class="image-wrap" src="http://content6.flixster.com/movie/11/15/90/11159072_pro.jpg" />'
                    }, {
                        html: '<img class="image-wrap" src="http://content9.flixster.com/movie/11/16/26/11162639_pro.jpg" />'
                    }, {
                        html: '<img class="image-wrap" src="http://content6.flixster.com/movie/11/16/26/11162672_pro.jpg" />'
                    }, {
                        html: '<img class="image-wrap" src="http://content8.flixster.com/movie/11/15/92/11159258_pro.jpg" />'
                    }, {
                        html: '<img class="image-wrap" src="http://content6.flixster.com/movie/11/15/84/11158472_pro.jpg" />'
                    }, {
                        html: '<img class="image-wrap" src="http://content7.flixster.com/movie/11/15/65/11156581_pro.jpg" />'
                    }, {
                        html: '<img class="image-wrap" src="http://content9.flixster.com/movie/11/15/16/11151659_pro.jpg" />'
                    }, {
                        html: '<img class="image-wrap" src="http://content8.flixster.com/movie/11/15/81/11158182_pro.jpg" />'
                    }, {
                        html: '<img class="image-wrap" src="http://content9.flixster.com/movie/11/15/90/11159075_pro.jpg" />'
                    }]
                }]
            }
        ]
    }
});
