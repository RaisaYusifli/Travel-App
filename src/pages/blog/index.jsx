import { Categories } from "./sections/Categories";
import { BlogArticles } from "./sections/blogArticles";
import { BlogPlc } from "./sections/blogPlc";

export function Blog(){
    return(
        <>
        <BlogPlc/>
        <Categories/>
        <BlogArticles/>
        </>
    )
}