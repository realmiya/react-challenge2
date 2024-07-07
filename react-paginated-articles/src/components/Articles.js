import React, { useEffect, useState } from "react";

const Articles = () => {
    const [totalPages, setTotalPages] = useState(0);
    const [articles, setArticles] = useState([]);
    const [data, setData] = useState([]);

    const link = "https://jsonmock.hackerrank.com/api/articles?page=";

    const apiCall = async (page) => {
        // async是异步的意思，为什么是异步，因为你先fetch，await fetch干完之后，然后再干await后面的事情
        // 按照你的老思维你一定觉得我fetch和更新页面是同步的啊，这也是我们marketing的时候要用的话术，但是事实上就是异步更新
        let url = link + page;
        try {
            let res = await fetch(url).then((res) => res.json());
            setData(res);

            let pages = res.total_pages;
            setTotalPages(pages);

            const filteredArticleswithTitle = res.data.filter(
                (item) => item.title != null
            );
            // 当你使用filter的时候，他会filter到res.data这一层，也就是说变量const filteredArticleswithTitle会进入下一层

            // 第二种写法，条件更简洁：
            // const filteredArticleswithTitle = res.data.filter(
            //     (item) => item.title
            // );
            setArticles(filteredArticleswithTitle);
        } catch (error) {
            console.log("error", error);
        }
    };

    useEffect(() => {
        apiCall(1);
    }, []); //首次开页面的时候是第一页

    useEffect(() => {
        console.log(data);
    }, [data]);
    useEffect(() => {
        console.log(articles);
    }, [articles]);

    const handleClick = (e) => {
        apiCall(e.target.value);

        // 第二种写法
        // let targetBtn = e.target.innerHTML;
        // apiCall(targetBtn);
    };

    return (
        <React.Fragment>
            <div className="pagination">
                {Array(totalPages)
                    .fill()
                    .map((page, index) => {
                        return (
                            <button
                                data-testid="page-button"
                                key={"page-button-" + index}
                                onClick={handleClick}
                                value={index + 1}
                            >
                                {index + 1}
                            </button>
                        );
                    })}
            </div>

            <ul className="results">
                {/* 第一种写法 */}
                {articles.length !== 0 &&
                    articles.map((i, idx) => {
                        return (
                            //从此处可以看出，省略掉的是花括号和return，圆括号是不能省的
                            <li key={"title-" + idx} data-testid="result-row">
                                {i.title}
                            </li>
                        );
                    })}

                {/* 第二种写法 */}
                {data.length !== 0
                    ? data.data
                          .filter((i) => i.title && i.title !== "")
                          .map((i, idx) => (
                              <li key={"title-" + idx} data-testid="result-row">
                                  {i.title}
                              </li>
                          ))
                    : null}
            </ul>
        </React.Fragment>
    );
};

export default Articles;
