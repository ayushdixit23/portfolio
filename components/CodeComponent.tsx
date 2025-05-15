'use client';

import Image from 'next/image';
import React, { memo } from 'react';
import code from "@/public/assets/codesnippet.png"

{/* <iframe
    src="https://carbon.now.sh/embed?bg=rgba%28171%2C+184%2C+195%2C+1%29&t=vscode&wt=none&l=application%2Ftypescript&width=680&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=0px&ph=0px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=export%2520const%2520asyncHandler%2520%253D%2520%28fn%29%2520%253D%253E%257B%250A%2520%2520%2520%2520return%2520async%2520%28req%252Cres%252Cnext%29%253D%253E%257B%250A%2520%2520%2520%2520%2520%2520%2520%2520try%257B%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520await%2520fn%28req%252Cres%252Cnext%29%253B%250A%2520%2520%2520%2520%2520%2520%2520%2520%257Dcatch%28error%29%257B%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520res.status%28error.code%2520%257C%257C%2520500%29.json%28%257B%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520success%253A%2520false%252C%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520message%253Aerror.message%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%257D%29%250A%250A%2520%2520%2520%2520%2520%2520%2520%2520%257D%250A%2520%2520%2520%2520%257D%250A%257D"
                style={{
                    width: '100%',
                    height: '100%',
                    border: 0,
                    overflow: 'hidden',
                }}
              
                loading="lazy"
            /> */}

const CodeComponent = () => {
    return (
        <div className="w-full h-full overflow-hidden rounded-3xl ">
            <Image src={code} alt='code' className='w-full h-full object-cover' />
        </div>
    );
};

export default memo(CodeComponent);
