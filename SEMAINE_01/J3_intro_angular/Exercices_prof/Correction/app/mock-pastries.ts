import { Pastrie, List } from './pastrie';

export const PASTRIES: Pastrie[] = [
    {
        "id": "1",
        "ref": "Pâtisserie",
        "name": "Fondant supreme",
        "description": "Voluptate mollit consectetur pariatur labore. Quis amet quis minim nulla voluptate amet nisi. Ut sint veniam magna aute velit minim laborum eiusmod mollit dolor laborum. Minim Lorem Lorem pariatur adipisicing laborum tempor consequat est officia proident. Qui consequat duis ipsum minim Lorem cillum in excepteur.\r\n",
        "url": "http://placehold.it/32x32",
        "quantity": 8,
        "order": 1,
        "tags": [
            "sucré",
            "yummy",
            "dessert"
        ],
        "like": "Much",
    },
    {
        "id": "2",
        "ref": "Pâtisserie",
        "name": "Cake tout Chocolat",
        "description": "Magna laborum quis qui deserunt id. Aute sint consequat aliquip minim duis tempor reprehenderit laborum pariatur ut anim culpa. Laboris sit ea cillum ex nostrud deserunt. Nulla deserunt exercitation non eu ipsum. Cillum ut irure et ea esse ea anim nostrud proident. Non incididunt ut velit pariatur. Occaecat qui fugiat cupidatat est pariatur irure sunt excepteur anim.\r\n",
        "url": "http://placehold.it/32x32",
        "quantity": 10,
        "order": 2,
        "tags": [
            "sucré",
            "yummy",
            "dessert",
            "chocolat"
        ],
        "like": "Much",
    },
    {
        "id": "3",
        "ref": "Pâtisserie",
        "name": "Cake Framboise chocolat",
        "description": "Exercitation sunt qui sint eiusmod velit est dolor duis commodo nulla cillum cupidatat dolor voluptate. Amet aute duis deserunt ad quis eiusmod est. In veniam veniam mollit velit qui amet quis. Et do sint ipsum nisi velit culpa laborum.\r\n",
        "url": "http://placehold.it/32x32",
        "quantity": 4,
        "order": 3,
        "tags": [
            "sucré",
            "yummy",
            "dessert",
            "chocolat",
            "framboises"
        ],
    },
    {
        "id": "4",
        "ref": "Viennoiserie",
        "name": "Brioche sucrée avec chocolat",
        "description": "Cillum proident commodo do non esse cillum incididunt officia qui occaecat. Excepteur id voluptate esse tempor aliqua voluptate in labore anim incididunt ea nostrud nisi. Proident adipisicing adipisicing enim adipisicing nisi elit irure.\r\n",
        "url": "http://placehold.it/32x32",
        "quantity": 6,
        "order": 4,
        "tags": [
            "sucré",
            "yummy"
        ],
        "like": "rather",
    },
    {
        "id": "5",
        "ref": "Pâtisserie glacée",
        "name": "Cake glacé fondant au chocolat",
        "description": "Labore tempor laborum voluptate exercitation velit tempor magna ut pariatur sint ex. Est id magna mollit ipsum mollit minim officia. Enim aliquip eiusmod sunt incididunt aliquip occaecat eu. Eiusmod fugiat aliquip officia tempor esse ut et nulla. Commodo consectetur aliquip mollit laborum velit dolor quis nisi do. Consectetur voluptate quis nostrud deserunt incididunt ea in ad adipisicing ea laboris ullamco. Occaecat consectetur mollit deserunt excepteur enim consectetur dolor nostrud aute.\r\n",
        "url": "http://placehold.it/32x32",
        "quantity": 2,
        "order": 5,
        "like": "Rather",
    },
    {
        "id": "6",
        "ref": "Pâtisserie",
        "name": "Eclairs au chocolat",
        "description": "Nostrud veniam dolor velit id occaecat cupidatat aliquip exercitation id aliqua nostrud. Ad mollit Lorem consectetur minim consequat est eiusmod deserunt pariatur est ullamco. Veniam anim veniam Lorem excepteur irure. Esse adipisicing nulla in incididunt. Consectetur fugiat exercitation aliquip excepteur ipsum ullamco ullamco magna commodo.\r\n",
        "url": "http://placehold.it/32x32",
        "quantity": 9,
        "order": 6,
        "tags": [
            "sucré",
            "yummy",
            "chocolat"
        ],
        "like": "Much",
    },
    {
        "id": "7",
        "ref": "Pâtisserie",
        "name": "Tarte poire chocolat",
        "description": "Nostrud veniam dolor velit id occaecat cupidatat aliquip exercitation id aliqua nostrud. Ad mollit Lorem consectetur minim consequat est eiusmod deserunt pariatur est ullamco. Veniam anim veniam Lorem excepteur irure. Esse adipisicing nulla in incididunt. Consectetur fugiat exercitation aliquip excepteur ipsum ullamco ullamco magna commodo.\r\n",
        "url": "http://placehold.it/32x32",
        "quantity": 5,
        "order": 7,
        "tags": [
            "sucré",
            "yummy",
            "chocolat",
            "poires",
            "fruits"
        ],
        "like": "Much",
    },
    {
        "id": "8",
        "ref": "Pâtisserie glacée",
        "name": "Banana au chocolat",
        "description": "Nostrud veniam dolor velit id occaecat cupidatat aliquip exercitation id aliqua nostrud. Ad mollit Lorem consectetur minim consequat est eiusmod deserunt pariatur est ullamco. Veniam anim veniam Lorem excepteur irure. Esse adipisicing nulla in incididunt. Consectetur fugiat exercitation aliquip excepteur ipsum ullamco ullamco magna commodo.\r\n",
        "url": "http://placehold.it/32x32",
        "quantity": 3,
        "order": 8,
        "tags": [
            "chocolat",
            "bananes",
            "fruits"
        ],
        "like": "Much",
    },
];


// Pensez à définir la classe List pour définir la liste des ingrédients des pâtisseries ci-dessous :
export const INGREDIENTS_LISTS: List[]  = [
    {
      "id": "1",
      "list": [
        "ad",
        "qui",
        "deserunt",
        "nulla",
        "cupidatat"
      ]
    },
    {
      "id": "2",
      "list": [
        "ipsum",
        "nostrud",
        "aliqua",
        "sunt"
      ]
    },
    {
      "id": "3",
      "list": [
        "et",
        "qui",
        "consectetur",
        "reprehenderit",
        "sunt",
        "Lorem",
        "laborum"
      ]
    },
    {
      "id": "4",
      "list": [
        "nulla",
        "velit",
        "do"
      ]
    },
    {
      "id": "5",
      "list": [
        "exercitation",
        "magna",
        "deserunt",
        "fugiat",
        "eu",
        "irure",
        "dolore"
      ]
    },
    {
      "id": "6",
      "list": [
        "sint",
        "minim",
        "nisi",
        "labore",
        "consequat",
        "duis",
        "elit"
      ]
    },
    {
      "id": "7",
      "list": [
        "in",
        "nostrud",
        "deserunt"
      ]
    },
    {
      "id": "8",
      "list": [
        "in",
        "nostrud"
      ]
    }
  ];
