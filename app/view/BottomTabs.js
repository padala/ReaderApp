Ext.define('SlideNavigationExample.view.BottomTabs', {
    extend: 'Ext.tab.Panel',
    alias: 'widget.bottomTabs',
    // requires: ['Ext.SegmentedButton'],
    config: {
        activeTab: 0,
        tabBar: {
            layout: {
                pack: 'center',
                align: 'center'
            },
            docked: 'bottom'
        },
        defaults: {
            scrollable: true
        },
        items: [{
            title: 'About Us',
            iconCls: 'user',
            style: "visibility: visible !important;",
            // cls: 'card',
            styleHtmlContent: true,
            html: '<h1>About Us</h1><p>The College Board is a mission-driven not-for-profit organization that connects students to college success and opportunity.Founded in 1900, the College Board was created to expand access to higher education. Today, the membership association is made up of over 6,000 of the world’s leading educational institutions and is dedicated to promoting excellence and equity in education.Each year, the College Board helps more than seven million students prepare for a successful transition to college through programs and services in college readiness and college success — including the SAT and the Advanced Placement Program. The organization also serves the education community through research and advocacy on behalf of students, educators and schools.</p>'
        }, {
            title: 'Advocacy',
            iconCls: 'info',
            styleHtmlContent: true,
            html: '<h1>Advocacy</h1><p>All students should have access to an affordable and successful college experience. We offer recommendations to improve and simplify the financial aid system so that enrollment and full participation in college is possible for all students. </p><h3>Rethinking Pell Grants</h3><p> Goal: Develop recommendationsfor strengthening the Pell Grant program and increasing the benefits it provides to both students and society as a whole. Convened by the College Board and funded by the Bill & Melinda Gates Foundation and the Lumina Foundation, the Rethinking Pell Grants Study Group made recommendations for improving the Pell Grant program for young people growing up in low - and moderate - income families, while also better serving older adults returning to school to improve their labor market opportunities.</p>'
        }, {
            title: 'MemberShip',
            iconCls: 'more',
            styleHtmlContent: true,
            html: '<h1>Membership</h1><p>Membership offers access to a powerful network of educators and decision makers with the capacity to change the education agenda.</p><h3>Join The College Board</h3><p>When an institution becomes a member, every professional in that institution has the opportunity to become an active player advocating for access, equity and excellence in education. </p><h3>Get Involved </h3> <p>Members create critical connections between policy, research and real-world practice to develop innovative solutions to the most pressing challenges in education today.</p>'
        }]
    }
});
