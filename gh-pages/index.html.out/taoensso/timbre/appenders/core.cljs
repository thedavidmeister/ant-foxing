(ns taoensso.timbre.appenders.core
  "Core Timbre appenders without any special dependency requirements.
  These can be aliased into the main Timbre ns for convenience."
  {:author "Peter Taoussanis (@ptaoussanis)"}
       
           
                            
                                                    

        
  (:require
   [clojure.string  :as str]
   [taoensso.encore :as enc :refer-macros [have have?]]))

;; TODO Add a simple official rolling spit appender?

;;;; Println appender (clj & cljs)

                                                     
                                                      
                                      

     
                                     
                                        

                                                                       

(defn println-appender
  "Returns a simple `println` appender for Clojure/Script.
  Use with ClojureScript requires that `cljs.core/*print-fn*` be set.

  :stream (clj only) - e/o #{:auto :*out* :*err* :std-err :std-out <io-stream>}."

  ;; Unfortunately no easy way to check if *print-fn* is set. Metadata on the
  ;; default throwing fn would be nice...

  [&                                                    [_opts]]
  (let [            
                          
                                           
                                           
                       ]

    {:enabled?   true
     :async?     false
     :min-level  nil
     :rate-limit nil
     :output-fn  :inherit
     :fn
     (fn [data]
       (let [{:keys [output_]} data]
                (println (force output_))
              
                     
                           
                                                       
                             
                             
                         

                                  
                                                    
                                                      ))}))

(comment (println-appender))

;;;; Spit appender (clj only)

     
                   
                                                      
                            
                                       
                              
                   
                    
                  
                  
                       
      
                  
                                  
           
                                                                
                                     
                                             
                                         
                                                     
                                                     
                                                                  

                                                     
                                                                       

(comment
  (spit-appender)
  (let [f (:fn (spit-appender))]
    (enc/qb 1000 (f {:output_ "boo"}))))

;;;; js/console appender (cljs only)

      
(defn console-appender
  "Returns a simple js/console appender for ClojureScript.

  For accurate line numbers in Chrome, add these Blackbox[1] patterns:
    `/taoensso/timbre/appenders/core\\.js$`
    `/taoensso/timbre\\.js$`
    `/cljs/core\\.js$`

  [1] Ref. https://goo.gl/ZejSvR"

  ;; TODO Any way of using something like `Function.prototype.bind`
  ;; (Ref. https://goo.gl/IZzkQB) to get accurate line numbers in all
  ;; browsers w/o the need for Blackboxing?

  [& [opts]]
  {:enabled?   true
   :async?     false
   :min-level  nil
   :rate-limit nil
   :output-fn  :inherit
   :fn
   (if (exists? js/console)
     (let [;; Don't cache this; some libs dynamically replace js/console
           level->logger
           (fn [level]
             (or
               (case level
                 :trace  js/console.trace
                 :debug  js/console.debug
                 :info   js/console.info
                 :warn   js/console.warn
                 :error  js/console.error
                 :fatal  js/console.error
                 :report js/console.info)
               js/console.log))]

       (fn [data]
         (when-let [logger (level->logger (:level data))]

           (if (or (:raw-console? data)
                   (get-in data [:?meta :raw-console?])) ; Undocumented

             (let [output
                   ((:output-fn data)
                    (assoc data
                      :msg_  ""
                      :?err nil))

                   args ; (<output> ?<raw-error> <raw-arg1> <raw-arg2> ...)
                   (let [vargs (:vargs data)]
                     (if-let [err (:?err data)]
                       (cons output (cons err vargs))
                       (cons output           vargs)))]

               (.apply logger js/console (into-array args)))
             (.call    logger js/console (force (:output_ data)))))))

     (fn [data] nil))})

(comment (console-appender))

;;;; Deprecated

       (def console-?appender "DEPRECATED" console-appender)

;;;;;;;;;;;; This file autogenerated from src/taoensso/timbre/appenders/core.cljx
