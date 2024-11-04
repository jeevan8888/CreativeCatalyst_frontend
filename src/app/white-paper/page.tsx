import React from 'react';
import { Button } from '@/components/ui/button';
import { FaFileAlt } from 'react-icons/fa';
import StepProgress from './StepProgress';

function WhitePage() {
    const steps = [
        { title: 'Step 1', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, maiores iure quidem soluta et quas repellat accusantium fugit iste sed ad nihil facere. Blanditiis ad aspernatur reiciendis quibusdam voluptatem quisquam.' },
        { title: 'Step 2', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, maiores iure quidem soluta et quas repellat accusantium fugit iste sed ad nihil facere. Blanditiis ad aspernatur reiciendis quibusdam voluptatem quisquam.' },
        { title: 'Step 3', description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem repellendus, esse harum consequatur excepturi quas ratione hic voluptate repudiandae eius incidunt, reprehenderit iusto iste, cum atque enim sint. Eum similique corrupti dolore blanditiis non necessitatibus molestias, fuga quidem consequuntur odio voluptatum, velit ab eos dicta maxime beatae totam, nostrum nam saepe. Impedit mollitia eos optio sequi quas officiis odit, veniam nisi reprehenderit debitis at quis tempora. Sint, dolores! Expedita eum recusandae nihil, ut molestiae a, ipsam vero, voluptatum reprehenderit perspiciatis debitis voluptates minus aliquid illum ducimus. Culpa repudiandae blanditiis aut, numquam recusandae dolor, obcaecati illo quod minus dolorem maiores temporibus?' },
        { title: 'Step 4', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, maiores iure quidem soluta et quas repellat accusantium fugit iste sed ad nihil facere. Blanditiis ad aspernatur reiciendis quibusdam voluptatem quisquam.' },
        { title: 'Step 5', description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem repellendus, esse harum consequatur excepturi quas ratione hic voluptate repudiandae eius incidunt, reprehenderit iusto iste, cum atque enim sint. Eum similique corrupti dolore blanditiis non necessitatibus molestias, fuga quidem consequuntur odio voluptatum, velit ab eos dicta maxime beatae totam, nostrum nam saepe. Impedit mollitia eos optio sequi quas officiis odit, veniam nisi reprehenderit debitis at quis tempora. Sint, dolores! Expedita eum recusandae nihil, ut molestiae a, ipsam vero, voluptatum reprehenderit perspiciatis debitis voluptates minus aliquid illum ducimus. Culpa repudiandae blanditiis aut, numquam recusandae dolor, obcaecati illo quod minus dolorem maiores temporibus?' },
    ];

    return (
        <section className="max-w-screen-2xl mx-auto p-6">
            <h1 className="text-[88px] font-bold text-white text-center">
                THE <span className="text-pink-700">WHITEPAPER</span>
            </h1>
            <div className="text-center my-6">
                <Button size="lg" className="bg-[#d9d9d9] rounded-2xl text-black font-bold text-4xl hover:bg-[#bfbfbf]">
                    <FaFileAlt className="mr-2 h-10" size={40} aria-hidden="true" />
                    Download
                </Button>
            </div>
            <StepProgress steps={steps} />
        </section>
    );
}

export default WhitePage;