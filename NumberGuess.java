import java.util.Scanner;

public class NumberGuess{
    public static void main(String[] args) {
    
        int RandomNumber = (int)(Math.random()*100);
        Scanner sc = new Scanner(System.in);
        int num;
        int Max = 0;

        System.out.println("Guess a number Between 0 to 100 : ");

    do{
        System.out.println("Guess a number: ");
        num = sc.nextInt();
        Max++; // Max += 1;
        
        
        if(RandomNumber<num){
            System.out.println("Your Number is Large , Guess Small one");
        }
        else if(RandomNumber>num){
            System.out.println("Your Number is Small, Guess Large one");
        }
        else{
            System.out.println("You Got it Champ!");
            System.out.printf("Total Attempt:- %d",Max);
            break;
        }
    }
    while (num>0);
        sc.close();
        }
    }
