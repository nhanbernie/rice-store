// // "use server"
// // import Head from 'next/head'
// // import { ISeoItems } from '@/common/models/seo/seo.model'
// // import { Metadata, ResolvedMetadata } from 'next'
// // const SEO = ({
// //   title,
// //   description,
// //   keywords,
// //   author,
// //   image,
// //   url,
// //   type,
// //   twitterUsername,
// // }: ISeoItems) => {
// //   return (
// //     <Head>
// //       <meta charSet="UTF-8" />
// //       <title>{title}</title>
// //       <meta name="description" content={description} />
// //       <meta name="keywords" content={keywords} />
// //       <meta name="author" content={author} />
// //       <meta name="viewport" content="width=device-width, initial-scale=1.0" />
// //       <meta name="robots" content="index, follow" />
// //       <meta property="og:title" content={title} />
// //       <meta property="og:description" content={description} />
// //       <meta property="og:image" content={image} />
// //       <meta property="og:url" content={url} />
// //       <meta property="og:type" content={type} />
// //       <meta name="twitter:card" content="summary" />
// //       <meta name="twitter:site" content={twitterUsername} />
// //       <meta name="twitter:title" content={title} />
// //       <meta name="twitter:description" content={description} />
// //       <meta name="twitter:image" content={image} />
// //     </Head>
// //   )
// // }

// // export default SEO

// "use server"

// import { Metadata } from 'next'
// import { ISeoItems } from '@/common/models/seo/seo.model'

// const SEO = ({
//   title,
//   description,
//   keywords,
//   author,
//   image,
//   url,
//   type,
//   twitterUsername,
//   openGraph
// }: ISeoItems): Metadata => {
//   return {
//     title: title,
//     description: description,
//     keywords: keywords,
//     // authors: [author],
//     // openGraph: {
//     //   title: openGraph.title,
//     //   description: openGraph.description,
//     //   images: openGraph.image,
//     //   url: openGraph.url,
//     //   type: openGraph.type as 'website' | 'article' | 'book' | 'profile' | 'music.song' | 'music.album' | 'music.playlist' | 'music.radio_station' | 'video.movie' | 'video.episode' | 'video.tv_show' | 'video.other' | undefined,
//     // },
//     twitter: {
//       card: 'summary',
//       site: twitterUsername,
//       title: title,
//       description: description,
//       images: image,
//     },
//   }
// }

// export default SEO