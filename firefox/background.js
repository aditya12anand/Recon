browser.contextMenus.onClicked.addListener(contextMenuAction);


      browser.contextMenus.create({  id: "whois",  title: " WhoIs",  contexts: ["selection"] , icons: { "16" : "icons/whois-16.png"}   });



      browser.contextMenus.create({  id: "archive",  title: " Archive.org",  contexts: ["selection"] , icons: { "16" : "icons/archive-16.png" }   });



      browser.contextMenus.create({  id: "gd",  title: " Google Dork ",  contexts: ["selection"]  });

            browser.contextMenus.create({  id: "cache",  title: " Cache",  contexts: ["selection"]  , parentId:"gd"});

            browser.contextMenus.create({  id: "link",  title: " Link",  contexts: ["selection"] , parentId: "gd" });

            browser.contextMenus.create({  id: "related",  title: " Related",  contexts: ["selection"] , parentId: "gd"  });

            browser.contextMenus.create({  id: "info",  title: " Info",  contexts: ["selection"] , parentId : "gd"  });

            browser.contextMenus.create({  id: "site",  title: " Site",  contexts: ["selection"] , parentId : "gd" });

            browser.contextMenus.create({  id: "allintitle",  title: " Allintitle",  contexts: ["selection"] , parentId : "gd" });

            browser.contextMenus.create({  id: "intitle",  title: " Intile",  contexts: ["selection"] , parentId : "gd" });

            browser.contextMenus.create({  id: "allinurl",  title: " Allinurl",  contexts: ["selection"] , parentId : "gd" });

            browser.contextMenus.create({  id: "inurl",  title: " Inurl",  contexts: ["selection"] , parentId : "gd" });

            browser.contextMenus.create({  id: "ext",  title: " Extension",  contexts: ["selection"] , parentId : "gd" });




      browser.contextMenus.create({  id: "se",  title: " Search engine ",  contexts: ["selection"]   });

            browser.contextMenus.create({  id: "google",  title: " Google",  contexts: ["selection"] ,parentId : "se"  });

            browser.contextMenus.create({  id: "bing", title: " Bing", contexts: ["selection"]  , parentId : "se" });

            browser.contextMenus.create({  id: "ddg",  title: " DuckDuckGo",  contexts: ["selection"]  , parentId : "se"  });

            browser.contextMenus.create({  id: "aol",  title: " Aol",  contexts: ["selection"]  , parentId : "se"  });

            browser.contextMenus.create({  id: "yahoo",  title: " Yahoo",  contexts: ["selection"]  , parentId : "se"  });

            browser.contextMenus.create({  id: "ask",  title: " Ask",  contexts: ["selection"]  , parentId : "se"  });

            browser.contextMenus.create({  id: "lycos",  title: " Lycos",  contexts: ["selection"]  , parentId : "se"  });

            browser.contextMenus.create({  id: "excite",  title: " Excite",  contexts: ["selection"]  , parentId : "se"  });

            browser.contextMenus.create({  id: "baidu",  title: " Baidu (Chinese)",  contexts: ["selection"]  , parentId : "se"  });

            browser.contextMenus.create({  id: "yandex",  title: " Yandex (Russian)",  contexts: ["selection"] ,parentId : "se"  });




      browser.contextMenus.create({  id: "sn",  title: " Social network ",  contexts: ["selection"]   });

            browser.contextMenus.create({  id: "facebook",  title: " Facebook",  contexts: ["selection"] ,parentId : "sn"   });

            browser.contextMenus.create({  id: "linkedin",  title: " LinkedIn",  contexts: ["selection"] , parentId : "sn"  });

            browser.contextMenus.create({  id: "twitter",  title: " Twitter",  contexts: ["selection"] , parentId : "sn"  });

            browser.contextMenus.create({  id: "insta",  title: " Instagram",  contexts: ["selection"] , parentId : "sn"  });

            browser.contextMenus.create({  id: "tumblr",  title: " Tumblr",  contexts: ["selection"] , parentId : "sn"  });


      browser.contextMenus.create({  id: "video",  title: " Video Sites",  contexts: ["selection"]   });

            browser.contextMenus.create({  id: "youtube",  title: " YouTube",  contexts: ["selection"] ,parentId : "video"  });

            browser.contextMenus.create({  id: "vimeo",  title: " Vimeo",  contexts: ["selection"] , parentId : "video"  });

            browser.contextMenus.create({  id: "dailymotion",  title: " DailyMotion ",  contexts: ["selection"]  , parentId : "video" });
      



      browser.contextMenus.create({  id: "os",  title: " Online Shopping",  contexts: ["selection"]   });

            browser.contextMenus.create({  id: "amazon",  title: " Amazon",  contexts: ["selection"] , parentId : "os" });

            browser.contextMenus.create({  id: "flipkart",  title: " Flipkart",  contexts: ["selection"] , parentId : "os"  });

            browser.contextMenus.create({  id: "snapdeal",  title: " Snapdeal",  contexts: ["selection"] , parentId : "os"  });

            browser.contextMenus.create({  id: "ebay",  title: " Ebay",  contexts: ["selection"] , parentId : "os"  });



      browser.contextMenus.create({  id: "wordpress",  title: " Wordpress",  contexts: ["selection"] , icons: { "16" : "icons/wordpress-16.png" } });



      browser.contextMenus.create({  id: "wiki",  title: " Wikipedia",  contexts: ["selection"]  , icons: { "16" : "icons/wiki-16.png"}  });    

      

      browser.contextMenus.create({  id: "github",  title: " Github",  contexts: ["selection"] , icons: { "16" : "icons/github-16.png"}  });  
      

function contextMenuAction(info)
      {
          if(info != null && info.hasOwnProperty('menuItemId') && info.hasOwnProperty('selectionText'))
          {
              var searchURL = findChoice(info.menuItemId);
              var url = '';
    
              if(searchURL != '')
                  {   url = searchURL + info.selectionText;  }
           
              browser.tabs.create({url: url})
          }
      }  

function findChoice(searchEngText)
{
          if(searchEngText == 'whois')
          {  return 'https://www.whois.com/whois/';   }

          else if(searchEngText == 'archive')
          {  return 'https://web.archive.org/web/*/';    }



  
          else if(searchEngText == 'cache')
          {  return 'https://www.google.co.in/search?q=cache%3A';  }
  
          else if(searchEngText == 'link')
          {  return 'https://www.google.co.in/search?q=link%3A';  }
  
          else if(searchEngText == 'related')
          {  return 'https://www.google.co.in/search?q=related%3A';  }
  
          else if(searchEngText == 'info')
          {  return 'https://www.google.co.in/search?q=info%3A';  }
  
          else if(searchEngText == 'site')
          {  return 'https://www.google.co.in/search?q=site%3A';  }
  
          else if(searchEngText == 'allintitle')
          {  return 'https://www.google.co.in/search?q=allintitle%3A';  }
  
          else if(searchEngText == 'intitle')
          {  return 'https://www.google.co.in/search?q=intitle%3A';  }
  
          else if(searchEngText == 'allinurl')
          {  return 'https://www.google.co.in/search?q=allinurl%3A';  }
  
          else if(searchEngText == 'inurl')
          {  return 'https://www.google.co.in/search?q=inurl%3A';  }
  
          else if(searchEngText == 'ext')
          {  return 'https://www.google.co.in/search?q=ext%3A';  }

          else if(searchEngText == 'wiki')
          {  return 'https://wikipedia.org/wiki/Search?search=';  }
        




          else if(searchEngText == 'google')
          {  return 'https://www.google.co.in/search?q=';  }
        
          else if(searchEngText == 'bing')
          {  return 'http://www.bing.com/search?q=';  }
       
          else if(searchEngText == 'ddg')
          {  return 'https://duckduckgo.com/?q=';  }

          else if(searchEngText == 'aol')
          {  return 'https://search.aol.com/aol/search?s_chn=prt_bon&q=';  }

          else if(searchEngText == 'yahoo')
          {  return 'https://in.search.yahoo.com/search?p=';  }

          else if(searchEngText == 'baidu')
          {  return 'http://www.baidu.com/s?&wd=';  }

          else if(searchEngText == 'excite')
          {  return 'http://msxml.excite.com/search/web?q=';  }

          else if(searchEngText == 'yandex')
          {  return 'https://www.yandex.com/search/?text=';  }

          else if(searchEngText == 'ask')                                 
          {  return 'https://www.ask.com/web?q=';  }

          else if(searchEngText == 'lycos')                               
          {  return 'http://search14.lycos.com/web/?q=';  }  
        



          else if(searchEngText == 'youtube')
          {  return 'https://www.youtube.com/results?search_query=';  }

          else if(searchEngText == 'vimeo')
          {  return 'https://vimeo.com/search?q=';  }          

          else if(searchEngText == 'dailymotion')
          {  return 'http://www.dailymotion.com/relevance/universal/search/';  }     




          else if(searchEngText == 'facebook')
          {  return 'https://www.facebook.com/search/str/';  }

          else if(searchEngText == 'twitter')
          {  return 'https://twitter.com/search?q=';  }

          else if(searchEngText == 'linkedin')
          {  return 'https://in.linkedin.com/pub/dir/';  }

          else if(searchEngText == 'insta')
          {  return 'https://www.instagram.com/';  }

          else if(searchEngText == 'tumblr')
          {  return 'https://www.tumblr.com/search/';  }


          else if(searchEngText == 'github')
          {  return 'https://github.com/search?q=';  }

          

          else if(searchEngText == 'wordpress')
          {  return 'https://en.search.wordpress.com/?src=organic&q=';  }


          
        
          else if(searchEngText == 'amazon')
          {  return 'https://www.amazon.com/s/field-keywords=';  }

          else if(searchEngText == 'flipkart')
          {  return 'https://www.flipkart.com/search?q=';  }

          else if(searchEngText == 'snapdeal')
          {  return 'https://www.snapdeal.com/search?keyword=';  }

          else if(searchEngText == 'ebay')
          {  return 'https://www.ebay.in/sch/i.html?_nkw=';  }
            
      return '';
}

