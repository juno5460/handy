define("#network/0.9.0/network",[],function(a,b,c){function h(){switch(navigator.onLine){case!0:i();break;case!1:j()}e=setTimeout(h,200)}function i(){f.forEach(function(a){l(a)}),g.forEach(function(a){a&&(a.called=!1)})}function j(){g.forEach(function(a){l(a)}),f.forEach(function(a){a&&(a.called=!1)})}function k(a){return a.called=!1,a}function l(a){a&&!a.called&&(a(),a.called=!0)}var d=b,e=null,f=[],g=[];d.online=function(a){a=k(a),f.push(a)},d.offline=function(a){a=k(a),g.push(a)},d.destroy=function(){clearTimeout(e)},h()});