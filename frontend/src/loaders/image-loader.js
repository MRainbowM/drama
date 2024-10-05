'use client'

export default function myImageLoader({ src }) {
    return `${process.env.NEXT_PUBLIC_API_URL}${src}`
}