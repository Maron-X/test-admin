export default function ({$fire,route, redirect}){

    if(route.path != '/'){
        if(!$fire.auth.currentUser){
            //  login page
            return redirect('/')
        }
    } else if (route.path =='/'){
        if(!$fire.auth.currentUser){
        }else{
            console.log('logenIn already')
            //  login page
            return redirect('/dashboard')
        }
    }
}