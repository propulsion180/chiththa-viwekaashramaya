package main

import (
	//	"crypto/tls"
	"fmt"
	//	"golang.org/x/crypto/acme/autocert"
	"html/template"
	"log"
	"net/http"
)

func rootHandler(w http.ResponseWriter, r *http.Request) {
	tmpl := template.Must(template.ParseFiles("static/index.html"))
	tmpl.Execute(w, nil)
}

func main() {

	http.HandleFunc("/", rootHandler)
	fs := http.FileServer(http.Dir("static"))
	http.Handle("/static/", http.StripPrefix("/static/", fs))
	fmt.Println("starting servers")

	//acm := &autocert.Manager{
	//	Cache:      autocert.DirCache("/var/www/.cache"),
	//	Prompt:     autocert.AcceptTOS,
	//	HostPolicy: autocert.HostWhitelist("gallery.wmmp.xyz"),
	//}

	//server := &http.Server{
	//	Addr:      ":443",
	//	TLSConfig: &tls.Config{GetCertificate: acm.GetCertificate},
	//	Handler:   http.DefaultServeMux,
	//}

	//go http.ListenAndServe(":80", m.HTTPHandler(nil))

	//log.Fatal(server.ListenAndServeTLS("", ""))

	log.Fatal(http.ListenAndServe(":8080", nil))
}
