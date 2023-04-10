import {defineType, defineField} from 'sanity'

export const product = defineType({
  title: "Product",
  name: "product",
  type: "document",
  fields: [
    defineField({
      title: "image",
      name: "Image",
      type: "array",
      of:[{type:'image'}],
      options:{
        hotspot:true
      }
    }),
    defineField({
      title: "name",
      name: "Name",
      type: "string",
    }),
    defineField({
      title: "slug",
      name: "Slug",
      type: "slug",
      options:{
        source:'name'
      }
    }),
    defineField({
        name:"price",
        title:'Price',
        type:'number'
    }),
    defineField({
        name:'details',
        title:'Details',
        type:'string'
    })
  ]
})