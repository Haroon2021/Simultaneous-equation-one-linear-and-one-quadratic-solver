const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
    event.preventDefault()
    // Line below takes the form data from the HTML page and we have to make sure that 
    // the name tags are filled in the HTML elements otherwise we will not get proper key pair values
    // when the data is transformed
    const linesData = new FormData(form);
    // The linke below transforms the data into data with Key value pairs
    const linesDataTransformed = Object.fromEntries(linesData);

    // Picking out the SUVAT values from the transformed data 
    const a = parseFloat(linesDataTransformed['a']);
    const b = parseFloat(linesDataTransformed['b']);
    const c = parseFloat(linesDataTransformed['c']);
    const d = parseFloat(linesDataTransformed['d']);
    const e = parseFloat(linesDataTransformed['e']);
    const f = parseFloat(linesDataTransformed['f']);
    const newa = a;
    const newb = b + (e/d);
    const newc = c - (f/d);
    const discriminant = (newb*newb) - (4*newa*newc);
    const x1 = ((-1)*newb + Math.sqrt(discriminant) ) / ( 2*newa );
    const x2 = ((-1)*newb - Math.sqrt(discriminant) ) / ( 2*newa );

    document.querySelector(".initialarranging").innerText = `Substiting in the values for a through to e we get: \n \n y = ${a}x^2+${b}x+${c} (equation 1) 
    ${d}y + ${e}x = ${f} (equation 2)

    rearranging equation 2 gives:
    ${d}y  = ${f} - ${e}x
    y  = ${f/d} - ${e/d}x

    Equating this to equation 1 gives:

    ${a}x^2+${b}x+${c} = ${f/d} - ${e/d}x
    ${a}x^2+${b + (e/d)}x+${c - (f/d)} =  0 (equation 3)
    Where:
    newa = ${a}
    newb = ${b + (e/d)}
    newc = ${c - (f/d)}

    The discriminant for the quadratic equation above is:

    newb^2 - 4*newa*newc
    ${newb}^2 - 4${newa}${newc}
    ${newb*newb} - ${4*newa*newc}
    ${(newb*newb) - (4*newa*newc)}
    `

    if (discriminant<0) {

        document.querySelector(".solvingnewquadratic").innerText = `The discriminant is less than 0 so we have no real solutions, if you were to graph equation 1 and 2 they would not instesect.`
    
    } else if (discriminant == 0) {
        document.querySelector(".solvingnewquadratic").innerText = `There is only one solution where equation 2 is tangent to equaiton 1
        Solution for equation 3 is:
        x = (-newb + sqrt(discriminant))/(2newa)
        x = (-newb + sqrt(0))/(2newa)
        x = (-newb )/(2newa)
        x = (-${newb} )/(2${newa})
        x = (${(-1)*newb} )/(${2*newa})
        x = ${((-1)*newb) /(2*newa) }
        
        Solving for the correspoiding y value:
        The linear equation is:
        y  = ${f/d} - ${e/d}x
        Substituting the x1 value gives:
        y  = ${f/d} - ${e/d}${x1}
        y  = ${f/d} - ${(e/d) * x1}
        y  = ${(f/d) - (e/d) * x1}
        `
    } else {
        document.querySelector(".solvingnewquadratic").innerText = `There are 2 real solutions, the straight line crosses the quadratic at two points
        Solution for equation 3 is:
        x1 = (-${newb} + sqrt(${discriminant}))/(2${newa})
        x1 = (${(-1)*newb} + ${Math.sqrt(discriminant)})/(${2*newa})
        x1 = (${(-1)*newb + Math.sqrt(discriminant)})/(${2*newa})
        x1 = ${(  (-1)*newb + Math.sqrt(discriminant) ) / ( 2*newa ) }

        Solving for the correspoiding y value:
        The linear equation is:
        y1  = ${f/d} - ${e/d}x1
        Substituting the x1 value gives:
        y1  = ${f/d} - ${e/d}${x1}
        y1  = ${f/d} - ${(e/d) * x1}
        y1  = ${(f/d) - (e/d) * x1}

        x2 = (-${newb} - sqrt(${discriminant}))/(2${newa})
        x2 = (-${newb} - ${Math.sqrt(discriminant)})/(${2*newa})
        x2 = (${(-1)*newb - Math.sqrt(discriminant)})/(${2*newa})
        x2 = ${(  (-1)*newb - Math.sqrt(discriminant) ) / ( 2*newa ) }

        Solving for the correspoiding y value:
        The linear equation is:
        y2  = ${f/d} - ${e/d}x2
        Substituting the x1 value gives:
        y2  = ${f/d} - ${e/d}${x2}
        y2  = ${f/d} - ${(e/d) * x2}
        y2  = ${(f/d) - (e/d) * x2}
        `
    }
})