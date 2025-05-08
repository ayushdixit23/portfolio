import React from 'react'

const RoleBadges = ({ text }: { text: string }) => {
    return (
        <div className="relative overflow-hidden font-medium text-center bg-[#1A1A1A] p-2 px-6 rounded-full shimmer">
            <span className="relative z-10 text-white/80">{text}</span>
        </div>
    )
}

export default RoleBadges