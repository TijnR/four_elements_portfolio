export const listItems = [
    {to: '/', name: 'home'}, 
    {to: '/barry', name: 'barry', dropdownItems: [
        {to: '/barry/grafisch-ontwerp', name: 'Grafisch ontwerp'},
        {to: '/barry/webdesign', name: 'Webdesign'},
        {to: '/barry/UXUI', name: 'UX/UI'}
    ]}, 
    {to: '/justin', name: 'justin', dropdownItems: [
        {to: '/justin/web-3D', name: 'Web - 3D'},
        {to: '/justin/phaserjs', name: 'Phaser.js'},
        {to: '/justin/automotive-design', name: 'Automotive Design'}
    ]}, 
    {to: '/kim', name: 'kim', dropdownItems: [
        {to: '/kim/visual-identity', name: 'Visual Identity'},
        {to: '/kim/hand-lettering', name: 'Hand Lettering'},
        {to: '/kim/abstract-background-animation', name: 'Abstract Background Animation'}
    ]}, 
    {to: '/tijn', name: 'tijn', dropdownItems: [
        {to: '/tijn/react-typescript', name: 'react & typescript'},
        {to: '/tijn/ios-development', name: 'IOS Developement'},
        {to: '/tijn/threejs-react', name: 'Three.js & React-Three-Fiber'}
    ]}
]

export const listProjects = [
    {name: "barry boogert", projectName: "Grafisch ontwerp", to: '/barry/grafisch-ontwerp', img: 1},
    {name: "justin van wijk", projectName: "Web - 3D", to: '/justin/web-3D', img: 4},
    {name: "kim van der waart", projectName: "Visual Identity", to: '/kim/visual-identity', img: 7},
    {name: "tijn roozen", projectName: "React & Typescript", to: '/tijn/react-typescript', img: 10},

    {name: "barry boogert", projectName: "Webdesign", to: '/barry/grafisch-ontwerp', img: 2},
    {name: "justin van wijk", projectName: "Phaser.js", to: '/justin/web-3D', img: 5},
    {name: "kim van der waart", projectName: "Hand Lettering", to: '/kim/visual-identity', img: 8},
    {name: "tijn roozen", projectName: "IOS Developement", to: '/tijn/react-typescript', img: 11},

    {name: "barry boogert", projectName: "UX/UI", to: '/barry/grafisch-ontwerp', img: 3},
    {name: "justin van wijk", projectName: "Automotive Design", to: '/justin/web-3D', img: 6},
    {name: "kim van der waart", projectName: "Abstract Background Animation", to: '/kim/visual-identity', img: 9},
    {name: "tijn roozen", projectName: "Three.js & React-Three-Fiber", to: '/tijn/react-typescript', img: 12},

]