import Vue from "vue";
import * as VueGoogleMaps from "vue2-google-maps";
Vue.use(VueGoogleMaps, {
    load: {
        key: "AIzaSyAL5CLsnbv6ski9X4qdHInt9tvj3u-lsJw",
        libraries: "places,drawing,visualization"
    },
    autobindAllEvents: true,
    installComponents: true
});
