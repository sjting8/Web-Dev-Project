from rest_framework import generics, status
from rest_framework.response import Response
from api.models.demo import Demo
from api.serializers.demo import DemoSerializer

class DemoView(generics.GenericAPIView):
    serializer_class = DemoSerializer

    def get(self, request, id=None):
        hold = Demo.objects.all()
        serializer = self.serializer_class(hold, many=True)
        return Response({'message': 'success', 'data': serializer.data}, status=status.HTTP_200_OK)

    def post(self, request, id=None):
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid() and serializer.data.get('id') != None:
            id = serializer.data.get('id')
            name = serializer.data.get('name')
            age = serializer.data.get('age')
            queryset = Demo.objects.filter(id=id)
            if queryset.exists():
                demo = queryset[0]
                demo.id = id
                demo.name = name
                demo.age = age
                demo.save(update_fields=['name', 'age'])
                return Response(DemoSerializer(demo).data, status=status.HTTP_200_OK)
        else:
            try:
                demo = Demo.objects.create(name=request.data['name'], age=request.data['age'])
                return Response(DemoSerializer(demo).data, status=status.HTTP_201_CREATED)
            except:
                return Response({'Bad Request': 'Invalid data...'}, status=status.HTTP_400_BAD_REQUEST)
        return Response({'Bad Request': 'Invalid data...'}, status=status.HTTP_400_BAD_REQUEST)
    
    def delete(self, request, id=None):
        id = request.query_params['id']
        demo = Demo.objects.filter(id=id)
        demo.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)