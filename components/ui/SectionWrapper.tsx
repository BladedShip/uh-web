import React from 'react'

type Props = {
    id: string;
    children: React.ReactNode;
    className?: string;
}

const SectionWrapper = ({ id, children, className }: Props) => {
  return (
    <section id={id} className={`h-[80vh] md:h-screen w-full relative p-2 py-4 ${className}`}>
        {children}
    </section>
  )
}

export default SectionWrapper