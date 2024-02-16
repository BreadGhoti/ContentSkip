    // get a random number between 0 and 499
    //
    var randNum = Math.floor(Math.random() * 500);

    // An array of URL's
    var randURLs = [
        "http://url0",
        "http://url1",
        "http://url1"
    ];

    // There was a 1 in 500 chance we generated a zero.
    if (randNum == 0) {
        // randURLs.length will tell us how many elements are
        // in the randURLs array - we can use this to generate
        // a random number between 0 and n (number of elements)
        //
        // In our case there are 3 elements in the array, 0, 1
        // and 2. So we want to get another random number in
        // the inclusive range 0 - 2
        //
        var randURL = Math.floor(Math.random() * randURLs.length);

        window.open(randURLs[randURL]);
    }
