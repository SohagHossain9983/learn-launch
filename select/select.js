



const Country = document.getElementById('country')
Country.onchange = function () {
    const value = Country.value;
    const State = document.getElementById('state');
    if (value === 'bd') {
        State.innerHTML = `<option value="" disabled selected>Select Country</option>
                        <option value="dhaka">Dhaka</option>
                        <option value="chittagong">Chittagong</option>
                        <option value="khulna">Khulna</option>
                        <option value="sylhet">Sylhet</option>
                        <option value="barisal">Barisal</option>
                        <option value="rangpur">Rangpur</option>
                        <option value="mymensingh">Mymensingh</option>
                        <option value="rajshahi">Rajshahi</option>`;
    } else if (value === "usa") {
        State.innerHTML = `<option value="" disabled selected>Select Country</option>
                        <option value="california">California</option>
                        <option value="texas">Texas</option>
                        <option value="florida">Florida</option>
                        <option value="new-york">New York</option>
                        <option value="illinois">Illinois</option>
                        <option value="pennsylvania">Pennsylvania</option>
                        <option value="ohio">Ohio</option>
                        <option value="georgia">Georgia</option>`;

    } else if (value === "canada") {
        State.innerHTML = `<option value="" disabled selected>Select Country</option>
                        <option value="england">England</option>
                        <option value="scotland">Scotland</option>
                        <option value="wales">Wales</option>
                        <option value="northern-ireland">Northern Ireland</option>`;
    } else {
        State.innerHTML = `<option value="" disabled selected> First Select Country</option>`
    }

}
