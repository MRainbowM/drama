'use client'

export default function myImageLoader({ src }) {
    return `${process.env.API_URL}${src}`
}