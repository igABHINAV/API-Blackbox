import React, { useState } from 'react'

const Home = () => {

    // basic variables used
    const [url, seturl] = useState("")
    const [method, setmethod] = useState("GET")
    const [Bearertoken, setBearertoken] = useState("")
    const [data, setdata] = useState("")
    const [cache, setcache] = useState([])


    // function to fetch
    const getdata = async () => {
        let l = {
            "method": `${method}`,
            "url": `${url}`,
            "headers": {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${Bearertoken}`
            },
            "data":`${data}`
        }

        let response = await fetch('http://127.0.0.1:8000/', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },

            body: JSON.stringify(l)
        })

        let d = await response.json()
        setcache(d)
        console.log(d)
    }



    return (
        <div>
            <div className="container col-xl-10 col-xl-8 px-4 py-5">

                {/* Title of the page */}

                <div className="row align-items-center g-lg-5 py-5">
                    <div className="col-lg-7 text-center text-lg-start">
                        <h1 className="display-4 fw-bold lh-1 text-body-emphasis mb-3">
                            API Blackbox
                        </h1>
                        <p className="col-lg-10 fs-4">
                            You can test your API on the API Blackbox platform. It provides a comprehensive testing environment
                            for evaluating the functionality and performance of your API. Get valuable insights and ensure
                            seamless integration with this powerful testing tool.
                        </p>
                    </div>


                    {/* Form starting  */}
                    <div className="col-md-10 mx-auto col-lg-5">
                        <form className="p-4 p-md-5 border rounded-3 bg-body-tertiary">
                            <div className="form-floating mb-3">
                                <input type="text" className="form-control" id="floatingInput4" placeholder="Enter url "
                                    value={url} onChange={(e) => seturl(e.target.value)}
                                />
                                <label htmlFor="floatingInput">URL</label>
                            </div>
                            <div className="form-floating mb-3">
                                <select className="form-control" id="floatingInput3" placeholder=" Method" value={method}
                                    onChange={(e) => setmethod(e.target.value)}
                                >
                                    <option value="GET">GET</option>
                                    <option value="POST">POST</option>
                                    <option value="PUT">PUT</option>
                                    <option value="PUT">PATCH</option>
                                    <option value="DELETE">DELETE</option>
                                </select>
                                <label htmlFor="floatingInput">Method</label>
                            </div>
                            <div className="form-floating mb-3">
                                <textarea className="form-control" id="floatingInput2" placeholder="Enter Headers ( , seperated elements)"
                                    value={Bearertoken} onChange={(e) => {
                                        setBearertoken(e.target.value)
                                    }}
                                />
                                <label htmlFor="floatingInput">Bearer Token</label>
                            </div>
                            <div className="form-floating mb-3">
                                <textarea
                                    className="form-control"
                                    id="floatingInput1"
                                    placeholder="Enter Data "
                                    value={data}
                                    onChange={(e) => setdata(e.target.value)}
                                />
                                <label htmlFor="floatingInput">Data </label>
                            </div>

                            <button className="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample" onClick={getdata}>
                                Send
                            </button>
                            <hr className="my-4" />
                            <small className="text-body-secondary">
                                By clicking  up, you can view what's on your API.
                            </small>
                        </form>
                    </div>
                </div>


                {/* response of your request */}

                

                <div className="container  my-5" >
                    <div className="p-5 text-center bg-body-tertiary  rounded-3" >
                        <h1 className="text-body-emphasis ">status code : {cache['status_code']}</h1>
                        <p className="lead bg-dark">
                            
                            <code >{cache['content']}</code>
                        </p>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Home