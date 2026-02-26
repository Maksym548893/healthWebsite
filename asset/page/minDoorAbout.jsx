import CleverSlider from '../aboutComponents/slider'
import SearchField from '../aboutComponents/searchField'
import ValidationForm from '../aboutComponents/validationForm'
import AdvancedSearchField from '../aboutComponents/advancedSearchField'
import SearchingFiltering from '../aboutComponents/advancedSearchingFiltering'
import AdvancedTodoList from '../aboutComponents/advancedTodoList'
import './minDoorAbout.css'
<script src="menu.js" defer></script>

function MinDoorAbout() {

    return(
        <>
        <CleverSlider />

        <SearchField />

        <ValidationForm />

        <AdvancedSearchField /> 

        <SearchingFiltering />

        <AdvancedTodoList />
        </>
    )
}

export default MinDoorAbout