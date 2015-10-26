angular
	.module('demo', [
		'ngAnimate',
		'ngRoute',
		'ngTouch',
	])


	.config(function($routeProvider) {
		$routeProvider
			.when('/', {
				templateUrl: 'list.tpl.html',
				controller: 'ListController',
				controllerAs: 'vm'
			})
			.when('/detail/:num', {
				templateUrl: 'detail.tpl.html',
				controller: 'DetailController',
				controllerAs: 'vm'
			})
			.otherwise({redirectTo: '/'});
	})

	.factory('contents', function() {
		var service = {
			list: [],
			setLimit: setLimit,
		};
		setLimit(100);
		return service;

		function setLimit(n) {
			while (service.list.length < n) {
				service.list.push({
					id: service.list.length,
					title: lorem(3),
					subtitle: lorem(10),
					description: lorem(50),
					number: 1 + Math.floor(Math.random() * 1000)
				});
			}
			
			service.list.length = n;
		};
	})

	.controller('ListController', function (contents,$location) {
		this.contents = contents;
		this.goTo = goTo;

		function goTo(item) {
			$location.path('/detail/'+item.id);
		}
	})

	.controller('DetailController', function (contents,$route) {
		this.detail = contents.list[$route.current.params.num];
	})

	;




var lorems = 'Lucas ipsum dolor sit amet solo darth yavin tusken raider ben sith darth ahsoka fett leia. Dantooine luke antilles lars ackbar. Bothan wicket antilles leia windu lars antilles kessel hutt. Jawa maul binks fisto obi-wan jawa moff. Chewbacca hoth skywalker bespin owen. Grievous palpatine mace greedo ackbar c-3p0. Skywalker calrissian r2-d2 greedo. Jade luuke dooku darth tatooine mace. Jango mara calrissian palpatine sith solo. Ewok leia dagobah skywalker. Darth mace gamorrean ackbar jabba gonk. Ben kenobi antilles moff grievous kamino dagobah. Tatooine droid mara anakin. Binks ackbar qui-gon kit k-3po vader luke. Chewbacca skywalker bothan boba anakin jinn solo. Fisto calrissian dantooine anakin fisto yoda darth solo grievous. Jabba hutt darth wookiee padmé wampa yoda. Grievous skywalker mon naboo mandalorians darth anakin bothan lobot. Darth k-3po fisto palpatine antilles skywalker antilles. Moff calamari maul c-3po mara sebulba darth. Antilles binks wampa sidious lobot organa owen skywalker. Jade hutt solo jade dagobah mace vader coruscant antilles. Solo ahsoka zabrak jawa hutt skywalker kessel k-3po. Gonk mara obi-wan cade. Kit darth organa wookiee grievous binks darth lobot. Skywalker greedo amidala calrissian hutt. Jade ben darth calamari baba ponda. Droid ewok jango kenobi windu. Vader dantooine darth jabba hutt fett ben fisto. Antilles hutt boba solo chewbacca jade sebulba. Owen dagobah ventress skywalker skywalker. Mon tatooine darth binks skywalker baba coruscant. Maul leia kamino gonk jade darth solo moff. Palpatine hutt r2-d2 gonk lars kenobi darth kashyyyk. Tatooine solo calrissian palpatine. Skywalker moff qui-gonn luke moff moff wookiee hutt. Yoda naboo gamorrean vader owen organa alderaan owen jinn. Darth tatooine leia darth darth lars. Mon darth skywalker lando droid utapau mon alderaan. Dantooine lobot moff calrissian ewok leia solo. Jar darth baba hoth hutt maul maul organa. Skywalker fett yavin fett solo yoda. Moff moff antilles coruscant yoda gamorrean. Mon wedge amidala mara darth moff boba c-3po. Calrissian amidala obi-wan darth mace. Darth alderaan darth antilles mace watto kessel.'.split(/[^\w]+/);
function lorem(n) {
	n = Math.random()*n/2 + n/2;
	var l = lorems.length;
	var i, r = '', p;
	for (i = 0; i < n; i++) {
		p = Math.floor(Math.random() * l);
		r += lorems[p] + ' ';
	}
	return r;
}