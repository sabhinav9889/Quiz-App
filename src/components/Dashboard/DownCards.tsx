import WordCloud from 'react-d3-cloud';
import RecentActive from './RecentCard';
import { ScrollArea } from "@/components/ui/scroll-area";

type Props = {
    data: { text: string; value: number }[];
    theme: Boolean;
};
export default function({data, theme}: Props){
    const arr: object[] = [{
        isMCQ: false,
        topic: "Python",
        Date: "07/12/2024"
    },
    {
        isMCQ: true,
        topic: "Moringa",
        Date: "07/12/2024"
    },
    {
        isMCQ: false,
        topic: "JavaScript",
        Date: "07/12/2024"
    },
    {
        isMCQ: true,
        topic: "Indian Hip Hop",
        Date: "07/12/2024"
    },
    {
        isMCQ: true,
        topic: "Botinical Gardan",
        Date: "27/02/2020"
    },
    {
        isMCQ: false,
        topic: "Machine Learning",
        Date: "07/02/2020"
    },
    ]
    const fontSizeMapper = (word:{value:number})=>{
        return Math.log2(word.value) * 5 + 16;
    }
    return(
        <div className="flex justify-center w-full pl-8 pr-8 mt-2">
                <div className="md:flex justify-between w-full">
                    <div className={`border mt-6 md:w-[47%] rounded-lg ${theme?'border-blackTheme':'border-whiteTheme'} cursor-pointer`}>
                    <p className="text-xl lg:text-3xl pt-4 pl-4 font-bold">Hot Topics</p>
                    <p className='pl-4'>Click on a topic to start a quiz on it</p>
                    <WordCloud data={data} height={360} rotate={0} font={"Times"} padding={10} fontSize={fontSizeMapper}/>
                    </div>
                    <div className={`md:w-[47%] rounded-lg border ${theme?'border-blackTheme':'border-whiteTheme'} pt-4 pl-4 mt-6`}>
                      <p className="text-xl lg:text-3xl mb-2 font-bold">Recent Activity</p>
                      <p className=''>Click on a topic to start a quiz on it</p>
                      <ScrollArea className={`h-[350px]`}>
                        {
                            arr.map((obj: any, index: number) => (
                                <RecentActive key={index} obj={obj} theme={theme}/>
                            ))
                        }
                    </ScrollArea>
                    </div>
                </div>
        </div>
    )
}