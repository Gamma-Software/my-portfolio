import { InlineCode } from "@/once-ui/components";

const createI18nContent = (t) => {
    const person = {
        firstName: 'Valentin',
        lastName:  'Rudloff',
        get name() {
            return `${this.firstName} ${this.lastName}`;
        },
        role:      t("person.role"),
        avatar:    '/images/avatar.png',
        location:  'Europe/Paris',        // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
        languages: ['English', 'French']  // optional: Leave the array empty if you don't want to display languages
    }

    const newsletter = {
        display: true,
        title: <>{t("newsletter.title", {firstName: person.firstName})}</>,
        description: <>{t("newsletter.description")}</>
    }

    const social = [
        // Links are automatically displayed.
        // Import new icons in /once-ui/icons.ts
        {
            name: 'GitHub',
            icon: 'github',
            link: 'https://github.com/Gamma-Software/',
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
        label: t("home.label"),
        title: t("home.title", {name: person.name}),
        description: t("home.description", {role: person.role}),
        headline: <>{t("home.headline")}</>,
        subline: <>{t("home.subline")}</>
    }

    const about = {
        label: t("about.label"),
        title: t("about.label"),
        description: t("about.description", {name: person.name, role: person.role, location: person.location}),
        tableOfContent: {
            display: true,
            subItems: true
        },
        avatar: {
            display: true
        },
        calendar: {
            display: true,
            title: t("about.calendar.title"),
            description: t("about.calendar.description"),
            link: 'https://cal.com/valentin-rudloff-htb2it/15min'
        },
        intro: {
            display: true,
            title: t("about.intro.title"),
            description: <>{t("about.intro.description")}</>
        },
        personal: {
            display: true,
            title: t("about.personal.title"),
            description: <>{t("about.personal.description")}</>,
            cta: {
                display: true,
                title: t("about.personal.cta.title"),
                link: t("about.personal.cta.link")
            }
        },
        work: {
            display: true, // set to false to hide this section
            title: t("about.work.title"),
            experiences: [
                {
                    company: 'Worldline',
                    image: t("about.work.experiences.Worldline.image"),
                    timeframe: t("about.work.experiences.Worldline.timeframe"),
                    role: t("about.work.experiences.Worldline.role"),
                    achievements: t("about.work.experiences.Worldline.achievements").split(";"),
                    images: [
                        {
                            link: 'https://worldline.com/fr-fr/home/main-navigation/ressources/centre-de-ressources/temoignages-clients/lm-control-worldline-paiement-innovant-pour-projets-recharge-vehicules-laveries-et-kiosques',
                            src: '/images/projects/lmc/prez.jpg',
                            alt: 'LM Control Recharge Vehicule',
                            width: 16,
                            height: 9
                        },
                        {
                            link: 'https://worldline.com/fr-fr/home/main-navigation/solutions/commercants/in-store-payments-gateway',
                            src: '/images/projects/lmc/worldline.jpeg',
                            alt: 'LM Control Recharge Vehicule',
                            width: 16,
                            height: 9
                        }
                    ]
                },
                {
                    company: 'Navya (Release Manager)',
                    image: t("about.work.experiences.Navya_rm.image"),
                    timeframe: t("about.work.experiences.Navya_rm.timeframe"),
                    role: t("about.work.experiences.Navya_rm.role"),
                    achievements: t("about.work.experiences.Navya_rm.achievements").split(";"),
                    images: [
                        {
                            link: 'https://www.navya.tech/fr/technologie/logiciel/',
                            src: '/images/projects/releasemanager/simu.webp',
                            alt: 'Navya Drive Release Manager',
                            width: 16,
                            height: 9
                        },
                    ]
                },
                {
                    company: 'Navya (Chef de projet)',
                    image: t("about.work.experiences.Navya_tract.image"),
                    timeframe: t("about.work.experiences.Navya_tract.timeframe"),
                    role: t("about.work.experiences.Navya_tract.role"),
                    achievements: t("about.work.experiences.Navya_tract.achievements").split(";"),
                    images: [
                        {
                            link: 'https://www.youtube.com/watch?v=CUeXF4VLI6M',
                            src: '/images/projects/tract/prez.webp',
                            alt: 'Navya Charlatte',
                            width: 16,
                            height: 9
                        },
                        {
                            link: 'https://www.facebook.com/NavyaGroup/videos/reportage-france-3-tracteur-charlatte-autonom-a%C3%A9roport-toulouse/802522323552040/?locale=fr_FR',
                            src: '/images/projects/tract/aeroport.jpg',
                            alt: 'Reportage Autonome Tract',
                            width: 16,
                            height: 9
                        }
                    ]
                },
                {
                    company: 'Navya (Développeur)',
                    image: t("about.work.experiences.Navya_dev.image"),
                    timeframe: t("about.work.experiences.Navya_dev.timeframe"),
                    role: t("about.work.experiences.Navya_dev.role"),
                    achievements: t("about.work.experiences.Navya_dev.achievements").split(";"),
                    images: [
                        {
                            link: 'https://www.youtube.com/watch?v=KrYNY9uEmbo',
                            src: '/images/projects/releasemanager/prez.webp',
                            alt: 'Navya Drive Driving',
                            width: 16,
                            height: 9
                        }
                    ]
                },
            ]
        },
        studies: {
            display: true, // set to false to hide this section
            title: 'Studies',
            institutions: [
                {
                    name: 'Ecole d\'ingénieurs ESTACA',
                    description: <>{t(`about.studies.institutions.ESTACA.description`)}</>,
                    certificate: [
                        {
                            src: '/images/certificates/estaca.pdf',
                            alt: 'Estaca Certificate',
                            pdfPreviewSrc: '/images/certificates/prev-estaca.png',
                            width: 16,
                            height: 9
                        }
                    ]
                },
                {
                    name: 'ISTQB',
                    description: <>{t("about.studies.institutions.ISTQB.description")}</>,
                    certificate: [
                        {
                            src: '/images/certificates/istqb.pdf',
                            alt: 'ISTQB Certificate',
                            pdfPreviewSrc: '/images/certificates/prev-istqb.png',
                            width: 16,
                            height: 9
                        },
                    ]
                },
                {
                    name: 'Meta',
                    description: <>{t("about.studies.institutions.Meta.description")}</>,
                    certificate: [
                        {
                            link: 'https://www.coursera.org/account/accomplishments/verify/Q56LCBCGJ7J9',
                            src: '/images/certificates/api.pdf',
                            alt: 'Meta Certificate API',
                            pdfPreviewSrc: '/images/certificates/prev-api.png',
                            width: 16,
                            height: 9
                        },
                        {
                            link: 'https://www.coursera.org/account/accomplishments/certificate/QYITBT7MJPSM',
                            src: '/images/certificates/advanced-react.pdf',
                            alt: 'Meta Certificate Advanced React',
                            pdfPreviewSrc: '/images/certificates/prev-advanced-react.png',
                            width: 16,
                            height: 9
                        },
                        {
                            link: 'https://www.coursera.org/account/accomplishments/certificate/ZFWLL2ICATCE',
                            src: '/images/certificates/django.pdf',
                            alt: 'Meta Certificate Python Django',
                            pdfPreviewSrc: '/images/certificates/prev-django.png',
                            width: 16,
                            height: 9
                        }
                    ]
                }
            ]
        },
        technical: {
            display: true, // set to false to hide this section
            title: t("about.technical.title"),
            skills: [
                {
                    title: 'Conception mécanique',
                    description: <>{t("about.technical.skills.mecanique.description")}</>,
                    images: []
                },
                {
                    title: 'Conception logicielle, développement et test',
                    description: <>{t("about.technical.skills.dev.description")}</>,
                    images: []
                },
                {
                    title: 'Gen AI',
                    description: <>{t("about.technical.skills.Gen AI.description")}</>,
                    images: []
                },
                {
                    title: 'React.js',
                    description: <>{t("about.technical.skills.Reactjs.description")}</>, // "." not accepted in next-intl namespace
                    images: []
                },
                {
                    title: 'Next.js',
                    description: <>{t("about.technical.skills.Nextjs.description")}</>, // "." not accepted in next-intl namespace
                    images: []
                }
            ]
        }
    }

    const blog = {
        label: t("blog.label"),
        title: t("blog.title"),
        description: t("blog.description", {name: person.name})
        // Create new blog posts by adding a new .mdx file to app/blog/posts
        // All posts will be listed on the /blog route
    }

    const work = {
        label: t("work.label"),
        title: t("work.title"),
        description: t("work.description", {name: person.name})
        // Create new project pages by adding a new .mdx file to app/blog/posts
        // All projects will be listed on the /home and /work routes
    }

    const gallery = {
        label: t("gallery.label"),
        title: t("gallery.title"),
        description: t("gallery.description", {name: person.name}),
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
    return {
        person,
        social,
        newsletter,
        home,
        about,
        blog,
        work,
        gallery
    }
};

export { createI18nContent };