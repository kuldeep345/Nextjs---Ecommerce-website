import { defineType, defineField } from 'sanity'

export const banner = defineType({
  title: "Banner",
  name: "banner",
  type: "document",
  fields: [
    defineField({
      title: "image",
      name: "Image",
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      title: "buttonText",
      name: "ButtonText",
      type: "string",
    }),
    defineField({
      title: "product",
      name: "Product",
      type: "string",
    }),
    defineField({
      name: "desc",
      title: 'Desc',
      type: 'string'
    }),
    defineField({
      name: 'smallText',
      title: 'SmallText',
      type: 'string'
    }),
    defineField({
      name: 'midText',
      title: 'MidText',
      type: 'string'
    }),
    defineField({
      name: 'largeText1',
      title: 'LargeText1',
      type: 'string'
    }),
    defineField({
      name: 'largeText2',
      title: 'LargeText2',
      type: 'string'
    }),
    defineField({
      name: 'discount',
      title: 'Discount',
      type: 'string'
    }),
    defineField({
      name: 'saleTime',
      title: 'SaleTime',
      type: 'string'
    }),
  ]
})