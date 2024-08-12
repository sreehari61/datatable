import {Component} from '@angular/core';
import DataTableColDef from "./model/ColDef";
import DataTableParams from "./model/tableparams";
import {CellrenderereComponent} from "./components/cellrenderere/cellrenderere.component";
import {CellEditingStoppedEvent} from "./interfaces/cellEditingStartEvent";
import {faPerson} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'datatable';
  rowData: any[] = [
    {
      "employeeId": 1,
      "employeeName": "Daphene Brum",
      "employeeEmail": "dbrum0@e-recht24.de",
      "employeeRole": "Construction Manager",
      "employeeGender": "Female",
      "employeeDepartment": "Accounting",
      "employeeAddress": "Room 69",
      "employeeActive": true
    },
    {
      "employeeId": 2,
      "employeeName": "Nonah Veltmann",
      "employeeEmail": "nveltmann1@webeden.co.uk",
      "employeeRole": "Architect",
      "employeeGender": "Female",
      "employeeDepartment": "Marketing",
      "employeeAddress": "7th Floor",
      "employeeActive": false
    },
    {
      "employeeId": 3,
      "employeeName": "Bran Gawthrop",
      "employeeEmail": "bgawthrop2@ezinearticles.com",
      "employeeRole": "Construction Expeditor",
      "employeeGender": "Non-binary",
      "employeeDepartment": "Legal",
      "employeeAddress": "PO Box 9122",
      "employeeActive": true
    },
    {
      "employeeId": 4,
      "employeeName": "Horace Rate",
      "employeeEmail": "hrate3@bigcartel.com",
      "employeeRole": "Subcontractor",
      "employeeGender": "Male",
      "employeeDepartment": "Marketing",
      "employeeAddress": "Apt 852",
      "employeeActive": true
    },
    {
      "employeeId": 5,
      "employeeName": "Kinna MacSkeaghan",
      "employeeEmail": "kmacskeaghan4@gov.uk",
      "employeeRole": "Construction Expeditor",
      "employeeGender": "Female",
      "employeeDepartment": "Engineering",
      "employeeAddress": "Apt 1614",
      "employeeActive": false
    },
    {
      "employeeId": 6,
      "employeeName": "Gill Havile",
      "employeeEmail": "ghavile5@themeforest.net",
      "employeeRole": "Construction Worker",
      "employeeGender": "Female",
      "employeeDepartment": "Research and Development",
      "employeeAddress": "3rd Floor",
      "employeeActive": true
    },
    {
      "employeeId": 7,
      "employeeName": "sreehari gunti",
      "employeeEmail": "ajudd6@imgur.com",
      "employeeRole": "Engineer",
      "employeeGender": "Polygender",
      "employeeDepartment": "Services",
      "employeeAddress": "Room 1379",
      "employeeActive": false
    },
    {
      "employeeId": 8,
      "employeeName": "Noreen Jandac",
      "employeeEmail": "njandac7@imageshack.us",
      "employeeRole": "Construction Manager",
      "employeeGender": "Female",
      "employeeDepartment": "Legal",
      "employeeAddress": "2nd Floor",
      "employeeActive": false
    },
    {
      "employeeId": 9,
      "employeeName": "Eward Hodges",
      "employeeEmail": "ehodges8@umn.edu",
      "employeeRole": "Project Manager",
      "employeeGender": "Male",
      "employeeDepartment": "Research and Development",
      "employeeAddress": "PO Box 82836",
      "employeeActive": true
    },
    {
      "employeeId": 10,
      "employeeName": "Doralia Wetheril",
      "employeeEmail": "dwetheril9@deliciousdays.com",
      "employeeRole": "Surveyor",
      "employeeGender": "Female",
      "employeeDepartment": "Product Management",
      "employeeAddress": "Suite 76",
      "employeeActive": false
    },
    {
      "employeeId": 11,
      "employeeName": "Lavinie Bridgeman",
      "employeeEmail": "lbridgemana@bravesites.com",
      "employeeRole": "Subcontractor",
      "employeeGender": "Female",
      "employeeDepartment": "Human Resources",
      "employeeAddress": "Suite 62",
      "employeeActive": true
    },
    {
      "employeeId": 12,
      "employeeName": "Derrick Outright",
      "employeeEmail": "doutrightb@nymag.com",
      "employeeRole": "Construction Foreman",
      "employeeGender": "Male",
      "employeeDepartment": "Support",
      "employeeAddress": "Room 1439",
      "employeeActive": false
    },
    {
      "employeeId": 13,
      "employeeName": "Fiona Kaemena",
      "employeeEmail": "fkaemenac@java.com",
      "employeeRole": "Construction Manager",
      "employeeGender": "Female",
      "employeeDepartment": "Sales",
      "employeeAddress": "17th Floor",
      "employeeActive": true
    },
    {
      "employeeId": 14,
      "employeeName": "Anthiathia Godin",
      "employeeEmail": "agodind@gov.uk",
      "employeeRole": "Construction Expeditor",
      "employeeGender": "Female",
      "employeeDepartment": "Research and Development",
      "employeeAddress": "3rd Floor",
      "employeeActive": true
    },
    {
      "employeeId": 15,
      "employeeName": "Cookie Guerrero",
      "employeeEmail": "cguerreroe@yandex.ru",
      "employeeRole": "Engineer",
      "employeeGender": "Female",
      "employeeDepartment": "Support",
      "employeeAddress": "Suite 83",
      "employeeActive": false
    },
    {
      "employeeId": 16,
      "employeeName": "Ulick Fearick",
      "employeeEmail": "ufearickf@baidu.com",
      "employeeRole": "Construction Manager",
      "employeeGender": "Male",
      "employeeDepartment": "Support",
      "employeeAddress": "PO Box 91153",
      "employeeActive": true
    },
    {
      "employeeId": 17,
      "employeeName": "Stormie Trengrove",
      "employeeEmail": "strengroveg@nymag.com",
      "employeeRole": "Construction Manager",
      "employeeGender": "Female",
      "employeeDepartment": "Sales",
      "employeeAddress": "Room 1468",
      "employeeActive": false
    },
    {
      "employeeId": 18,
      "employeeName": "Corabelle Beckford",
      "employeeEmail": "cbeckfordh@tripadvisor.com",
      "employeeRole": "Project Manager",
      "employeeGender": "Female",
      "employeeDepartment": "Business Development",
      "employeeAddress": "17th Floor",
      "employeeActive": false
    },
    {
      "employeeId": 19,
      "employeeName": "Robb Dawe",
      "employeeEmail": "rdawei@cnbc.com",
      "employeeRole": "Construction Worker",
      "employeeGender": "Male",
      "employeeDepartment": "Human Resources",
      "employeeAddress": "PO Box 80481",
      "employeeActive": true
    },
    {
      "employeeId": 20,
      "employeeName": "Gustaf Trussell",
      "employeeEmail": "gtrussellj@themeforest.net",
      "employeeRole": "Engineer",
      "employeeGender": "Male",
      "employeeDepartment": "Services",
      "employeeAddress": "Suite 7",
      "employeeActive": true
    },
    {
      "employeeId": 21,
      "employeeName": "Gayel Aitken",
      "employeeEmail": "gaitkenk@hugedomains.com",
      "employeeRole": "Project Manager",
      "employeeGender": "Bigender",
      "employeeDepartment": "Engineering",
      "employeeAddress": "1st Floor",
      "employeeActive": true
    },
    {
      "employeeId": 22,
      "employeeName": "Erastus Niccols",
      "employeeEmail": "eniccolsl@bing.com",
      "employeeRole": "Supervisor",
      "employeeGender": "Male",
      "employeeDepartment": "Legal",
      "employeeAddress": "18th Floor",
      "employeeActive": true
    },
    {
      "employeeId": 23,
      "employeeName": "Lev Stickford",
      "employeeEmail": "lstickfordm@weather.com",
      "employeeRole": "Estimator",
      "employeeGender": "Male",
      "employeeDepartment": "Business Development",
      "employeeAddress": "PO Box 67964",
      "employeeActive": true
    },
    {
      "employeeId": 24,
      "employeeName": "Towny Eastabrook",
      "employeeEmail": "teastabrookn@google.cn",
      "employeeRole": "Construction Foreman",
      "employeeGender": "Male",
      "employeeDepartment": "Human Resources",
      "employeeAddress": "Suite 16",
      "employeeActive": false
    },
    {
      "employeeId": 25,
      "employeeName": "Selinda Avramov",
      "employeeEmail": "savramovo@discuz.net",
      "employeeRole": "Construction Foreman",
      "employeeGender": "Female",
      "employeeDepartment": "Support",
      "employeeAddress": "1st Floor",
      "employeeActive": false
    },
    {
      "employeeId": 26,
      "employeeName": "Miltie Flett",
      "employeeEmail": "mflettp@simplemachines.org",
      "employeeRole": "Construction Manager",
      "employeeGender": "Male",
      "employeeDepartment": "Services",
      "employeeAddress": "Room 802",
      "employeeActive": false
    },
    {
      "employeeId": 27,
      "employeeName": "Damon Raymond",
      "employeeEmail": "draymondq@eventbrite.com",
      "employeeRole": "Estimator",
      "employeeGender": "Polygender",
      "employeeDepartment": "Engineering",
      "employeeAddress": "Room 1148",
      "employeeActive": false
    },
    {
      "employeeId": 28,
      "employeeName": "Morris Detoc",
      "employeeEmail": "mdetocr@furl.net",
      "employeeRole": "Project Manager",
      "employeeGender": "Male",
      "employeeDepartment": "Engineering",
      "employeeAddress": "Room 1861",
      "employeeActive": false
    },
    {
      "employeeId": 29,
      "employeeName": "Gabie Krzysztof",
      "employeeEmail": "gkrzysztofs@flavors.me",
      "employeeRole": "Project Manager",
      "employeeGender": "Female",
      "employeeDepartment": "Engineering",
      "employeeAddress": "6th Floor",
      "employeeActive": true
    },
    {
      "employeeId": 30,
      "employeeName": "Elita Reboul",
      "employeeEmail": "ereboult@prnewswire.com",
      "employeeRole": "Estimator",
      "employeeGender": "Female",
      "employeeDepartment": "Business Development",
      "employeeAddress": "PO Box 72952",
      "employeeActive": false
    },
    {
      "employeeId": 31,
      "employeeName": "Rebeka Sumshon",
      "employeeEmail": "rsumshonu@ning.com",
      "employeeRole": "Project Manager",
      "employeeGender": "Bigender",
      "employeeDepartment": "Legal",
      "employeeAddress": "PO Box 28363",
      "employeeActive": false
    },
    {
      "employeeId": 32,
      "employeeName": "Neala Robilart",
      "employeeEmail": "nrobilartv@irs.gov",
      "employeeRole": "Construction Foreman",
      "employeeGender": "Female",
      "employeeDepartment": "Services",
      "employeeAddress": "Suite 59",
      "employeeActive": true
    },
    {
      "employeeId": 33,
      "employeeName": "Maurine MacShirie",
      "employeeEmail": "mmacshiriew@nytimes.com",
      "employeeRole": "Architect",
      "employeeGender": "Female",
      "employeeDepartment": "Support",
      "employeeAddress": "PO Box 60517",
      "employeeActive": false
    },
    {
      "employeeId": 34,
      "employeeName": "Chrissy Cankett",
      "employeeEmail": "ccankettx@globo.com",
      "employeeRole": "Supervisor",
      "employeeGender": "Male",
      "employeeDepartment": "Human Resources",
      "employeeAddress": "Room 1264",
      "employeeActive": true
    },
    {
      "employeeId": 35,
      "employeeName": "Valle Burbridge",
      "employeeEmail": "vburbridgey@twitpic.com",
      "employeeRole": "Surveyor",
      "employeeGender": "Male",
      "employeeDepartment": "Accounting",
      "employeeAddress": "Apt 1808",
      "employeeActive": false
    },
    {
      "employeeId": 36,
      "employeeName": "Flo Lancetter",
      "employeeEmail": "flancetterz@usatoday.com",
      "employeeRole": "Construction Expeditor",
      "employeeGender": "Female",
      "employeeDepartment": "Business Development",
      "employeeAddress": "Suite 89",
      "employeeActive": false
    },
    {
      "employeeId": 37,
      "employeeName": "Daniela Bartkiewicz",
      "employeeEmail": "dbartkiewicz10@va.gov",
      "employeeRole": "Project Manager",
      "employeeGender": "Female",
      "employeeDepartment": "Marketing",
      "employeeAddress": "Room 1669",
      "employeeActive": false
    },
    {
      "employeeId": 38,
      "employeeName": "Garek Gherardi",
      "employeeEmail": "ggherardi11@newyorker.com",
      "employeeRole": "Construction Foreman",
      "employeeGender": "Male",
      "employeeDepartment": "Support",
      "employeeAddress": "Room 1888",
      "employeeActive": false
    },
    {
      "employeeId": 39,
      "employeeName": "Urbanus Veronique",
      "employeeEmail": "uveronique12@tiny.cc",
      "employeeRole": "Construction Worker",
      "employeeGender": "Male",
      "employeeDepartment": "Legal",
      "employeeAddress": "18th Floor",
      "employeeActive": true
    },
    {
      "employeeId": 40,
      "employeeName": "Susie Gabey",
      "employeeEmail": "sgabey13@whitehouse.gov",
      "employeeRole": "Construction Worker",
      "employeeGender": "Female",
      "employeeDepartment": "Research and Development",
      "employeeAddress": "PO Box 67876",
      "employeeActive": false
    },
    {
      "employeeId": 41,
      "employeeName": "Penrod Stoll",
      "employeeEmail": "pstoll14@spiegel.de",
      "employeeRole": "Project Manager",
      "employeeGender": "Male",
      "employeeDepartment": "Product Management",
      "employeeAddress": "Apt 1276",
      "employeeActive": false
    },
    {
      "employeeId": 42,
      "employeeName": "Livvy Dysert",
      "employeeEmail": "ldysert15@accuweather.com",
      "employeeRole": "Construction Worker",
      "employeeGender": "Female",
      "employeeDepartment": "Support",
      "employeeAddress": "Room 1880",
      "employeeActive": true
    },
    {
      "employeeId": 43,
      "employeeName": "Michael Pledge",
      "employeeEmail": "mpledge16@jiathis.com",
      "employeeRole": "Electrician",
      "employeeGender": "Male",
      "employeeDepartment": "Accounting",
      "employeeAddress": "Room 1004",
      "employeeActive": true
    },
    {
      "employeeId": 44,
      "employeeName": "Jessica Haskey",
      "employeeEmail": "jhaskey17@domainmarket.com",
      "employeeRole": "Surveyor",
      "employeeGender": "Female",
      "employeeDepartment": "Research and Development",
      "employeeAddress": "Room 635",
      "employeeActive": true
    },
    {
      "employeeId": 45,
      "employeeName": "Petronille Abrams",
      "employeeEmail": "pabrams18@1und1.de",
      "employeeRole": "Construction Expeditor",
      "employeeGender": "Female",
      "employeeDepartment": "Human Resources",
      "employeeAddress": "Suite 57",
      "employeeActive": true
    },
    {
      "employeeId": 46,
      "employeeName": "Erin Eyeington",
      "employeeEmail": "eeyeington19@jugem.jp",
      "employeeRole": "Supervisor",
      "employeeGender": "Male",
      "employeeDepartment": "Human Resources",
      "employeeAddress": "Apt 892",
      "employeeActive": false
    },
    {
      "employeeId": 47,
      "employeeName": "Mei Berzin",
      "employeeEmail": "mberzin1a@blogs.com",
      "employeeRole": "Construction Expeditor",
      "employeeGender": "Female",
      "employeeDepartment": "Services",
      "employeeAddress": "Apt 2000",
      "employeeActive": true
    },
    {
      "employeeId": 48,
      "employeeName": "Deanna Galey",
      "employeeEmail": "dgaley1b@webeden.co.uk",
      "employeeRole": "Supervisor",
      "employeeGender": "Female",
      "employeeDepartment": "Services",
      "employeeAddress": "PO Box 80950",
      "employeeActive": true
    },
    {
      "employeeId": 49,
      "employeeName": "Glennie Sidnell",
      "employeeEmail": "gsidnell1c@cnet.com",
      "employeeRole": "Estimator",
      "employeeGender": "Female",
      "employeeDepartment": "Marketing",
      "employeeAddress": "Apt 486",
      "employeeActive": false
    },
    {
      "employeeId": 50,
      "employeeName": "Sheffy Pree",
      "employeeEmail": "spree1d@google.com.au",
      "employeeRole": "Construction Expeditor",
      "employeeGender": "Male",
      "employeeDepartment": "Human Resources",
      "employeeAddress": "PO Box 94430",
      "employeeActive": true
    }
  ]
  colDefs: DataTableColDef[] = [
    {
      headerName: "Employee ID",
      field: "employeeId",
      headerTooltip: "Employee ID",
      tooltipField: "employeeId",
      hide: true
    },
    {
      headerName: "Employee Name",
      field: "employeeName",
      headerTooltip: "Employee Name",
      tooltipField: "employeeName",
      editable:true
    },
    {
      headerName: "Employee Email",
      field: "employeeEmail",
      headerTooltip: "Employee Email",
      tooltipField: "employeeEmail",
      editable:true
    },
    {
      headerName: "Employee Role",
      field: "employeeRole",
      headerTooltip: "Employee Role",
      tooltipField: "employeeRole"
    },
    {
      headerName: "Employee Gender",
      field: "employeeGender",
      headerTooltip: "Employee Gender",
      tooltipField: "employeeGender",
      cellRenderer: CellrenderereComponent
    },
    {
      headerName: "Employee Department",
      field: "employeeDepartment",
      headerTooltip: "Employee Department",
      tooltipField: "employeeDepartment"
    },
    {
      headerName: "Employee Address",
      field: "employeeAddress",
      headerTooltip: "Employee Address",
      tooltipField: "employeeAddress",
      hide: false
    },
    {
      headerName: "Employee Active",
      field: "employeeActive",
      headerTooltip: "Employee Active",
      tooltipField: "employeeActive",
      valueGetter:(params: DataTableParams)=> {
        return params.data.employeeActive ? "Active" : "Inactive";
      },
      toolTipValueGetter:(params: any)=> {
        return params.data.employeeActive ? "Active" : "Inactive";
      }
    }
  ]

  onCellEditingStarted(event: any) {
    console.log("cell edit start",event)
  }

  onCellEditingStopped(event: CellEditingStoppedEvent) {
    console.log("cell edit stopped",event)
  }

  protected readonly faPerson = faPerson;
}
