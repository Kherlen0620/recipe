require("@babel/polyfill");
import Search from "./model/search";
import { elements, renderLoader,clearLoader } from "./view/base";
import * as searchView from './view/searchView';
/**
 * Web app tuluv
 * -Hailtiin query, ur dun
 * Tuhain uzuulj baigaa jor
 * -Like hiisen joruud
 * 
 */
const state = {};
const controlSearch = async () => {
    // 1) Webees hailtiin tulhuur ugiig gargaj avna.
    const query = searchView.getInput();
    
    if(query) {
    // 2) Shineer hailtiin objectiig uusgej ugnu.
    state.search = new Search(query);   
    // 3) Hailt hiihed zoriulj delgetsiig UI-g beltgene.
    searchView.clearSearchQuery();
    searchView.clearSearchResult();
    renderLoader(elements.searchResultDiv);

    // 4) Hailtiig guitsetgene.
    await state.search.doSearch();
    // 5) Hailtgiin ur dung delgetsend uzuulne.
    clearLoader();
    if(state.search.result === undefined) alert('Hailtaar ilertsgui.');
    else console.log(state.search.result); searchView.renderRecipes(state.search.result);

    } 
};
elements.searchForm.addEventListener('submit', e => { 
    e.preventDefault(); 
    controlSearch(); });







