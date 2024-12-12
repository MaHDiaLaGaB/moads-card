const baseURL = 'demo.once-ui.com'

// default customization applied to the HTML in the main layout.tsx
const style = {
    theme: 'dark',        // dark | light
    neutral: 'gray',        // sand | gray | slate
    brand: 'cyan',        // blue | indigo | violet | magenta | pink | red | orange | yellow | moss | green | emerald | aqua | cyan
    accent: 'indigo',      // blue | indigo | violet | magenta | pink | red | orange | yellow | moss | green | emerald | aqua | cyan
    solid: 'contrast',    // color | contrast
    solidStyle: 'flat',        // flat | plastic
    border: 'playful',     // rounded | playful | conservative
    surface: 'translucent', // filled | translucent
    transition: 'all',         // all | micro | macro
    scaling: '100',         // 90 | 95 | 100 | 105 | 110
}

// default metadata
const meta = {
    title: 'Moad - The Wizard',
    description: 'Electronic profile website'
}


// default open graph data
const og = {
    title: 'Moad Profile',
    description: 'Backend and AI engineer',
    type: 'website'
}

// default schema data
const schema = {
    logo: '',
    type: 'Organization',
    name: 'Moad',
    description: 'Moad Ben Yousef',
    email: 'moadbenyousef0@gmail.com'
}

// social links
const social = {
    x: '',
    linkedin: 'https://www.linkedin.com/in/moad-benyousef-397a69296',
    discord: ''
}

export { baseURL, style, meta, og, schema, social };