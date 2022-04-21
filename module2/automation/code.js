module.exports = {
    answers: [`
    #include <bits/stdc++.h>
            using namespace std;
            
            int main(){
                int number_of_elements;
                cin >> number_of_elements;
                vector <int> array(number_of_elements);
                int sum_of_array = 0;
                
                for(int i = 0; i < number_of_elements; i++){
                   cin >> array[i];
                   sum_of_array += array[i];
                }
                
                cout << sum_of_array;
                return 0;
            }
    `,`#include <bits/stdc++.h>
    using namespace std;
    int N;
    int A[100];
    int main()
    {
        for(int i=0; i<3; i++)
            scanf("%d", A+i);
        int a, b=0, c=0;
        for(int i=0; i<3; i++)
        {
            scanf("%d", &a);
            if(a>A[i])
                c++;
            else if(a<A[i])
                b++;
        }
        printf("%d %d\n", b, c);
        return 0;
    }> 
    `,`#include <cmath>
    #include <cstdio>
    #include <vector>
    #include <iostream>
    #include <algorithm>
    using namespace std;
    int main() {
        /* Enter your code here. Read input from STDIN. Print output to STDOUT */   
        long long sum=0;
        int n;
        cin>>n;
        int data;
        for(int i=0;i<n;i++) {
            cin>>data;
            sum+=data;
        }
        cout<<sum<<endl;
        return 0;
    }
    `,`
    #include <iostream>
    using namespace std;
    int main() {
        int n;
        cin >> n;
        int arr[n][n];
        long long int d1=0; //First Diagonal
        long long int d2=0; //Second Diagonal
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < n; j++) {
                cin >> arr[i][j];
                if (i == j) d1 += arr[i][j];
                if (i == n - j - 1) d2 += arr[i][j];
            }
        }
        cout << abs(d1 - d2) << endl; //Absolute difference of the sums across the diagonals
        return 0;
    }
    `,`#include <cmath>
    #include <cstdio>
    #include <vector>
    #include <iostream>
    #include <algorithm>
    using namespace std;
    int main() {
        int p=0,n=0,z=0,a,i,j;
        cin>>j;
        for(i=0;i<j;i++){
            cin>>a;
            
            if(a>0)
                p++;
            else if(a<0)
                n++;
            else
                z++;
        }
        
        printf("%.3f\n",(float)p/j);
        printf("%.3f\n",(float)n/j);
        printf("%.3f",(float)z/j);
        /* Enter your code here. Read input from STDIN. Print output to STDOUT */   
        return 0;
    }
    `,`#include <cmath>
    #include <cstdio>
    #include <vector>
    #include <iostream>
    #include <algorithm>
    using namespace std;
    int main() {
        
        int n,i,j,k;
        cin>>n;
        for(i=1;i<=n;i++)
        {
            for(j=1;j<=n-i;j++)
            {
                cout<<" ";    
            }
            for(k=j;k<=n;k++)
            {
                cout<<"#";    
            }
            cout<<"\n";
        }
        /* Enter your code here. Read input from STDIN. Print output to STDOUT */   
        return 0;
    } 
    `,`#include <bits/stdc++.h>
    typedef long long LL;
    using namespace std;
    int main(){
        LL s[5];
        LL d = 0;
        for(int i = 0; i < 5; i++){
            cin >> s[i];
            d += s[i];
        }
        sort(s,s+5);
        cout << d-s[4] << " " << d-s[0] << endl;
    }
    `,`#include<bits/stdc++.h>
    using namespace std;
    typedef long long ll;
    typedef vector<int> vi;
    typedef pair<int,int> pii;
    typedef pair<ll,ll> pll;
    typedef vector<pii> vpii;
    typedef unsigned long long llu;
    #define author ayushtomar
    #define rf freopen("in.txt", "r", stdin)
    #define wf freopen("out.txt", "w", stdout)
    #define debug(x) cerr<<#x<<" "<<x<<endl;
    #define f first
    #define s second
    #define mp make_pair
    #define pb push_back
    map < int ,int > ma;
    int main()
    {
        int n;
        cin>>n;
        int ans=-1;
        for(int i=0;i<n;i++) {
                int x;
            cin>>x;
            ma[x]++;
            ans=max(ans,x);
        }
        cout<<ma[ans];
    return 0;
    }
    `,`#include <cmath>
    #include <cstdio>
    #include <vector>
    #include <iostream>
    #include <algorithm>
    using namespace std;
    int main() {
        /* Enter your code here. Read input from STDIN. Print output to STDOUT */   
        string s;
        string h;
        int hr;
        cin>>s;
        hr = ((s[0]-'0')*10)+(s[1]-'0');
        if(s[8]=='P'&&s[9]=='M'&& hr ==12) cout<<to_string(hr);
        else if(s[8]=='P'&&s[9]=='M') cout<<to_string(hr+12);
        else if(s[8]=='A'&&s[9]=='M'&&hr==12) cout<<"00";
        
        else cout<< s[0]<<s[1];
        
       
        for(int i =2;i<8;i++)
            cout<<s[i];
        cout<<endl;
        return 0;
    }
    `]
}