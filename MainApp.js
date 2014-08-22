angular.module('app', [ 'ui.bootstrap', 'app.controllers', 'app.directives', 'app.services', 'app.filters','gantt']);
angular.module('app.controllers', []);
angular.module('app.directives', []);
angular.module('app.services', []);
angular.module('app.filters', []);

angular.module('app').controller('MainController', function( $rootScope, $scope, $modal, $compile ) {

	 $scope.mode = "custom";
    $scope.maxHeight = 0;
    $scope.showWeekends = true;
    $scope.showNonWorkHours = true;
    $scope.todate =new Date(2013,11,11,18,0,0);
    $scope.autoexpand='both';
	  var rowsupdate;
	  var sampledata=[{ 	
	  					id:1,
	  					description:"Milestones", 
	  					order: 0, 
	  					tasks:[
	  								 {"id": "11", "subject": "Kickoff", "color": "#93C47D", "from": "2013-10-07T09:00:00", "to": "2013-10-09T10:00:00", "data": "Can contain any custom data or object"},
               						 {"id": "12", "subject": "Concept approval", "color": "#93C47D", "from": new Date(2013,9,11,18,0,0), "to": new Date(2013,9,18,18,0,0)},
                					 {"id": "13", "subject": "Development finished", "color": "#93C47D", "from": new Date(2013,9,19,18,0,0), "to": new Date(2013,9,20,18,0,0)},
                					 {"id": "14", "subject": "Shop is running", "color": "#93C47D", "from": new Date(2013,10,22,12,0,0), "to": new Date(2013,10,22,12,0,0)},
               						 {"id": "15", "subject": "Go-live", "color": "#93C47D", "from": new Date(2013,10,29,16,0,0), "to": new Date(2013,12,29,16,0,0)}
	  															
	  							]
					   },
					   { 
	  					id:2,
	  					description:"aaaaa", 
	  					order: 0, 
	  					tasks:[
	  								 {"id": "21", "subject": "aaa", "color": "#93C47D", "from": "2013-10-08T09:00:00", "to": "2013-10-09T10:00:00", "data": "Can contain any custom data or object"},
               						 {"id": "22", "subject": "b b", "color": "#93C47D", "from": new Date(2013,9,18,18,0,0), "to": new Date(2013,9,20,18,0,0)},
                					 {"id": "23", "subject": "s c", "color": "#93C47D", "from": new Date(2013,10,15,18,0,0), "to": new Date(2013,10,15,18,0,0)},
                					 {"id": "24", "subject": "w is e", "color": "#93C47D", "from": new Date(2013,10,22,12,0,0), "to": new Date(2013,10,22,12,0,0)},
               						 {"id": "25", "subject": "w-e", "color": "#93C47D", "from": new Date(2013,10,29,16,0,0), "to": new Date(2013,10,29,16,0,0)}
	  															
	  							]
					   },
					   { 
	  					id:3,
	  					description:"baew", 
	  					order: 0, 
	  					tasks:[
	  								 {"id": "31", "subject": "z", "color": "#93C47D", "from": "2013-10-07T09:00:00", "to": "2013-10-11T10:00:00", "data": "Can contain any custom data or object"},
               						 {"id": "32", "subject": "qw approval", "color": "#93C47D", "from": new Date(2013,9,14,18,0,0), "to": new Date(2013,9,18,18,0,0)},
                					 {"id": "33", "subject": "wr finished", "color": "#93C47D", "from": new Date(2013,10,15,18,0,0), "to": new Date(2013,10,15,18,0,0)},
                					 {"id": "34", "subject": "gr is running", "color": "#93C47D", "from": new Date(2013,10,22,12,0,0), "to": new Date(2013,10,22,12,0,0)},
               						 {"id": "35", "subject": "Go-rg", "color": "#93C47D", "from": new Date(2013,10,29,16,0,0), "to": new Date(2013,10,29,16,0,0)}
	  															
	  							]
					   }
					   ];

	console.log(sampledata);
	var testdata=[{ 	
	  					id:1,
	  					description:"Milestones", 
	  					order: 0, 
	  					tasks:[
	  								 {"id": "11", "subject": "Kickoff", "color": "#93C47D", "from": "2013-10-07T09:00:00", "to": "2013-10-09T10:00:00", "data": "Can contain any custom data or object"},
               						 {"id": "12", "subject": "Concept approval", "color": "#93C47D", "from": new Date(2013,9,11,18,0,0), "to": new Date(2013,9,18,18,0,0)},
                					 {"id": "13", "subject": "Development finished", "color": "#93C47D", "from": new Date(2013,9,19,18,0,0), "to": new Date(2013,9,20,18,0,0)},
                					 {"id": "14", "subject": "Shop is running", "color": "#93C47D", "from": new Date(2013,10,22,12,0,0), "to": new Date(2013,10,22,12,0,0)},
               						 {"id": "15", "subject": "Go-live", "color": "#93C47D", "from": new Date(2013,10,29,16,0,0), "to": new Date(2013,10,29,16,0,0)}
	  															
	  							]
					   }];

   $scope.addSamples = function () {
 		//$scope.dattt= sampledata;
 		//console.log($scope.dattt);
        $scope.loadData(sampledata);
   	 
    };
    $scope.getdata = function(){
    	//$compile($('gantt'))($scope);
    	$scope.loadData(sampledata);
    }

    $scope.taskEvent = function(event) {
        // A task has been updated or clicked.
        console.log(event);
        rowsupdate=event.rows;
         //$scope.dattt= sampledata;

    };
	
    $scope.removeAll = function(){
    	 $scope.clearData();
    }

    $scope.savedata = function(){
    	if(rowsupdate){
    		var tempdata=[];
    		var temptask;	
    		for(var i=0;i<rowsupdate.length;i++){

    			temptask=[];

    			for(var j=0;j<rowsupdate[i].tasks.length;j++){
				    		temptask.push({
				    		id: rowsupdate[i].tasks[j].id,
				    		subject: rowsupdate[i].tasks[j].subject,
				    		color: rowsupdate[i].tasks[j].color,
				    		from: rowsupdate[i].tasks[j].from,
				    		to: rowsupdate[i].tasks[j].to
				    	});
				    }

    			tempdata.push({	id: rowsupdate[i].id,
    							description: rowsupdate[i].description,
    							order: rowsupdate[i].order,
    							tasks: temptask

    							}
    						);

    		}

    		sampledata = tempdata;
    		//console.log(sampledata);

    	}
    	
    }

  $scope.scrollEvent = function(event) {
        if (angular.equals(event.direction, "left")) {
            // Raised if the user scrolled to the left side of the Gantt. Use this event to load more data.
            console.log('Scroll event: Left');
        } else if (angular.equals(event.direction, "right")) {
            // Raised if the user scrolled to the right side of the Gantt. Use this event to load more data.
            console.log('Scroll event: Right');
        }
    };

	   var runnumber = 1;
       var currentID= 'tID'+runnumber;

    var ModalCtrl = function ($scope,$modalInstance,date) {

      $scope.date=date;
      $scope.objform={};

     $scope.ok = function(){
     // console.log(JSON.parse($scope.objform.selectcat).color);
     console.log(currentID);
      $modalInstance.close({
        id: currentID,
        name: $scope.objform.objname,
        status: 0
      });//return data

      runnumber++;
      currentID = 'tID'+runnumber;


      }

     $scope.cancel = function(){
        $modalInstance.dismiss('cancel');
      }
      
    }


     $scope.rowEventClick = function(e){
    	
     	//console.log(e);

    	var modalInstance = $modal.open({
          templateUrl: 'template/popupModal.html',
          controller: ModalCtrl,
          resolve: {
              	date: function(){
              		return e.date;
              	}
              }  
      	});

    	  modalInstance.result.then(function (data) {
    	  	console.log(e);
    	  	e.row.addTask({"id": data.id, "subject": data.name, "color": "#93C47D", "from": e.date, "to":  new Date(2014,12,29,16,0,0)});
	    	rowsupdate=e.rows;
	    	$scope.savedata();	

			$scope.loadData(sampledata);
	    	$compile($('gantt'))($scope);

    	  });


		
    }

/*
	var obj=function(){
		this.alertw = function(){
			alert('aaaa');
		}
	};
	obj.prototype.setobj=function(data,data2){
		this.name=data;
		this.surname=data2;
	};
	obj.prototype.getobj=function(){
		alert(this.name+'  '+this.surname);
	};

	var obj2 = new obj();
	obj2.setobj('a','b');
	obj2.getobj();*/



});