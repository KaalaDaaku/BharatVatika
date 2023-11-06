import React from 'react'
import BlogLoop from '../blog-loop/BlogLoop.component'

const BlogSection = () => {
  return (
    <div className='m-5'>
      <h3>OUR BLOG</h3>
      <hr />
      <div className='row'>
        Welcome to Bharat Vatika, a flourishing digital oasis for plant enthusiasts. With a diverse array of plant categories, strategic affiliate marketing, user-to-user transactions fostering community bonds, blockchain-secured payments, and seamless mobile app integration, Bharat Vatika transcends the traditional plant trading experience. It's not just a marketplace; it's a dynamic ecosystem where connections blossom. Through vibrant community engagement features, this platform goes beyond transactions, offering forums, discussions, and events that cultivate a shared passion for plants. Join Bharat Vatika, where the love for greenery meets cutting-edge technology, creating a thriving digital garden for plant enthusiasts to connect, trade, and grow together.
        <BlogLoop />
      </div>
    </div>
  )
}

export default BlogSection