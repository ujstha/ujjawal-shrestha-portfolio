import {defineField, defineType} from 'sanity'

export const techType = defineType({
  name: 'tech',
  title: 'Technologies',
  type: 'document',
  fields: [
    defineField({name: 'title', title: 'Technology', type: 'array', of: [{type: 'string'}]}),
  ],
})
