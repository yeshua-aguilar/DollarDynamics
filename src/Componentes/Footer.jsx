import React from 'react';
import { Avatar } from "@nextui-org/react";

const NewPage = () => {
    return (
        <div className='bg-orange-400 w-full h-auto p-5'>
            <div>
                <p>20224 - DolarDynamics</p>

                <div className='flex justify-end items-center space-x-4'>
                    <a href="https://github.com/yeshua-aguilar" target="_blank" rel="noopener noreferrer">
                        <Avatar src="https://cdn-icons-png.flaticon.com/512/25/25231.png" />
                    </a>
                    <a href="https://www.linkedin.com/in/yeshua-aguilar-b2b8721b6/" target="_blank" rel="noopener noreferrer">
                        <Avatar src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/LinkedIn_icon.svg/2048px-LinkedIn_icon.svg.png" />
                    </a>
                </div>

            </div>
        </div>
    );
};

export default NewPage;