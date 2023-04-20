package main

import(
        "log"
        "net/url"
        "net/http"
        "net/http/httputil"
)

func main() {
        remote, err := url.Parse("http://localhost:8085/api/pokemon")
        if err != nil {
                panic(err)
        }

        handler := func(p *httputil.ReverseProxy) func(http.ResponseWriter, *http.Request) {
                return func(w http.ResponseWriter, r *http.Request) {
                        log.Println(r.URL)
                        r.Host = remote.Host
                        w.Header().Set("X-Ben", "Rad")
                        p.ServeHTTP(w, r)
                }
        }
        
        proxy := httputil.NewSingleHostReverseProxy(remote)
        http.HandleFunc("/", handler(proxy))
        err = http.ListenAndServe(":8083", nil)
        if err != nil {
                panic(err)
        }
}
