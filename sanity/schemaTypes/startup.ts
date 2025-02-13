import {defineType, defineField} from "sanity";


export const startup = defineType({
    name: 'startup',
    title: 'Start up',
    type: 'document',
    fields: [defineField({
        name: 'title',
        type: 'string',
    }),
        defineField({
            name: 'slug',
            type: 'slug',
            options: {
                source: 'title'
            }
        }),

        defineField({
            name: 'author',
            type: 'reference',
            to: {type: 'author'},
        }),
        defineField({
            name: 'views',
            type: 'number',
        }),
        defineField({
            name: 'description',
            type: 'text',
        }),
        defineField({
            name: 'category',
            type: 'string',
            validation: (rule) => rule.min(1).max(20).required().error('Please enter a category')
        }),
        defineField({
            name: 'image',
            type: 'url',
            validation: (rule) => rule.required().error('Please enter a image')
        }),
        defineField({
            name: 'pitch',
            type: 'markdown'
        }),

    ]
})