import { InlineCode } from "@/once-ui/components";

const person = {
    firstName: 'Valentin',
    lastName:  'Rudloff',
    get name() {
        return `${this.firstName} ${this.lastName}`;
    },
    role:      'Design Engineer',
    avatar:    '/images/avatar.png',
    location:  'Europe/Paris',        // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
    languages: ['English', 'French']  // optional: Leave the array empty if you don't want to display languages
}

const newsletter = {
    display: true,
    title: <>Subscribe to {person.firstName}'s Newsletter</>,
    description: <>I occasionally write about design, technology, and share thoughts on the intersection of creativity and engineering.</>
}

const social = [
    // Links are automatically displayed.
    // Import new icons in /once-ui/icons.ts
    {
        name: 'GitHub',
        icon: 'github',
        link: 'https://github.com/Gamma-Software',
    },
    {
        name: 'LinkedIn',
        icon: 'linkedin',
        link: 'https://www.linkedin.com/rudloffvalentin/',
    },
    {
        name: 'X',
        icon: 'x',
        link: '',
    },
    {
        name: 'Email',
        icon: 'email',
        link: 'mailto:valentin.rudloff.perso@gmail.com',
    },
]

const home = {
    label: 'Home',
    title: `${person.name}'s Portfolio`,
    description: `Portfolio website showcasing my work as a ${person.role}`,
    headline: <>Design engineer and builder</>,
    subline: <>I'm Valentin, a design engineer at <InlineCode>FLY</InlineCode>, where I craft intuitive<br/> user experiences. After hours, I build my own projects.</>
}

const about = {
    label: 'About',
    title: 'About me',
    description: `Meet ${person.name}, ${person.role} from ${person.location}`,
    tableOfContent: {
        display: true,
        subItems: true
    },
    avatar: {
        display: true
    },
    calendar: {
        display: true,
        link: 'https://cal.com'
    },
    intro: {
        display: true,
        title: 'Introduction',
        description: <>Valentin is a Jakarta-based design engineer with a passion for transforming complex challenges into simple, elegant design solutions. Her work spans digital interfaces, interactive experiences, and the convergence of design and technology.</>
    },
    work: {
        display: true, // set to false to hide this section
        title: 'Work Experience',
        experiences: [
            {
                company: 'FLY',
                timeframe: '2022 - Present',
                role: 'Senior Design Engineer',
                achievements: [
                    <>Redesigned the UI/UX for the FLY platform, resulting in a 20% increase in user engagement and 30% faster load times.</>,
                    <>Spearheaded the integration of AI tools into design workflows, enabling designers to iterate 50% faster.</>
                ],
                images: [ // optional: leave the array empty if you don't want to display images
                    {
                        link: 'https://fly.com',
                        src: '/images/projects/project-01/cover-01.jpg',
                        alt: 'Once UI Project',
                        width: 16,
                        height: 9
                    }
                ]
            },
            {
                company: 'Creativ3',
                timeframe: '2018 - 2022',
                role: 'Lead Designer',
                achievements: [
                    <>Developed a design system that unified the brand across multiple platforms, improving design consistency by 40%.</>,
                    <>Led a cross-functional team to launch a new product line, contributing to a 15% increase in overall company revenue.</>
                ],
                images: [ ]
            }
        ]
    },
    studies: {
        display: true, // set to false to hide this section
        title: 'Studies',
        institutions: [
            {
                name: 'University of Jakarta',
                description: <>Studied software engineering.</>,
            },
            {
                name: 'Build the Future',
                description: <>Studied online marketing and personal branding.</>,
            }
        ]
    },
    technical: {
        display: true, // set to false to hide this section
        title: 'Technical skills',
        skills: [
            {
                title: 'Figma',
                description: <>Able to prototype in Figma with Once UI with unnatural speed.</>,
                images: [
                    {
                        src: '/images/projects/project-01/cover-02.jpg',
                        alt: 'Project image',
                        width: 16,
                        height: 9
                    },
                    {
                        src: '/images/projects/project-01/cover-03.jpg',
                        alt: 'Project image',
                        width: 16,
                        height: 9
                    },
                ]
            },
            {
                title: 'Next.js',
                description: <>Building next gen apps with Next.js + Once UI + Supabase.</>,
                images: [
                    {
                        src: '/images/projects/project-01/cover-04.jpg',
                        alt: 'Project image',
                        width: 16,
                        height: 9
                    },
                ]
            }
        ]
    }
}

const blog = {
    label: 'Blog',
    title: 'Writing about design and tech...',
    description: `Read what ${person.name} has been up to recently`
    // Create new blog posts by adding a new .mdx file to app/blog/posts
    // All posts will be listed on the /blog route
}

const work = {
    label: 'Work',
    title: 'My projects',
    description: `Design and dev projects by ${person.name}`
    // Create new project pages by adding a new .mdx file to app/blog/posts
    // All projects will be listed on the /home and /work routes
}

const gallery = {
    label: 'Gallery',
    title: 'My photo gallery',
    description: `A photo collection by ${person.name}`,
    images: [
            {
                src: '/images/gallery/bretagne/bretagne_plage.jpg',
                alt: 'bretagne plage',
                orientation: 'horizontal'
            },
            {
                src: '/images/gallery/bretagne/boys.jpg',
                alt: 'boys',
                orientation: 'vertical'
            },
            {
                src: '/images/gallery/bretagne/iles-chausey.mp4',
                alt: 'iles chausey',
                orientation: 'horizontal'
            },
            {
                src: '/images/gallery/bretagne/meneham-higher.jpg',
                alt: 'meneham higher',
                orientation: 'horizontal'
            },
            {
                src: '/images/gallery/bretagne/meneham-lower.jpg',
                alt: 'meneham lower',
                orientation: 'horizontal'
            },
            {
                src: '/images/gallery/bretagne/meneham-pano.jpg',
                alt: 'meneham pano',
                orientation: 'horizontal'
            },
            {
                src: '/images/gallery/cloud/cloud-magenta.jpg',
                alt: 'cloud magenta',
                orientation: 'horizontal'
            },
            {
                src: '/images/gallery/cloud/cloud-violet.jpg',
                alt: 'cloud violet',
                orientation: 'horizontal'
            },
            {
                src: '/images/gallery/etretat/etretat_2.jpg',
                alt: 'etretat stretch',
                orientation: 'horizontal'
            },
            {
                src: '/images/gallery/etretat/etretat-aval-cliff.jpg',
                alt: 'etretat cliss',
                orientation: 'horizontal'
            },
            {
                src: '/images/gallery/etretat/etretat.jpg',
                alt: 'etretat bw',
                orientation: 'vertical'
            },
            {
                src: '/images/gallery/etretat/second-jour-etretat.jpg',
                alt: 'etretat second day',
                orientation: 'horizontal'
            },
            {
                src: '/images/gallery/normandie/baie-de-slack.jpg',
                alt: 'baie de slack',
                orientation: 'vertical'
            },
            {
                src: '/images/gallery/normandie/cotes-de-granville.jpg',
                alt: 'cote de granville',
                orientation: 'horizontal'
            },
            {
                src: '/images/gallery/normandie/coucher-du-soleil.jpg',
                alt: 'coucher du soleil',
                orientation: 'vertical'
            },
            {
                src: '/images/gallery/normandie/eglise-normandie.jpg',
                alt: 'eglise normandie',
                orientation: 'vertical'
            },
            {
                src: '/images/gallery/normandie/normandie.jpg',
                alt: 'normandie port',
                orientation: 'horizontal'
            },
            {
                src: '/images/gallery/normandie/plage-de-wimereux.jpg',
                alt: 'plage de wimereux',
                orientation: 'vertical'
            },
            {
                src: '/images/gallery/annecy/dent-de-lafon.jpg',
                alt: 'dent de lafon',
                orientation: 'horizontal'
            },
            {
                src: '/images/gallery/annecy/dent-de-lafon2.jpg',
                alt: 'dent de lafon',
                orientation: 'horizontal'
            }
        ]
    }

export { person, social, newsletter, home, about, blog, work, gallery };